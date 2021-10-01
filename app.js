const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');

// .env로 비밀키 보관
const dotenv = require('dotenv');
dotenv.config();

// 라우터 가져오기
const loginRouter = require('./routes/login');
const joinRouter = require('./routes/join');
const schoolAuthenticationRouter = require('./routes/school-authentication');
const refreshRouter = require('./routes/refresh-token');

// MySQL 설정 설정
const { sequelize } = require('./models/index');

const app = express();

app.set('port', process.env.PORT || 8001);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
/*
app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});
*/
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.log('데이터베이스 연결 실패');
    console.error(err);
  });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.unsubscribe(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

// 라우트 연결
app.use('/login', loginRouter);
app.use('/join', joinRouter);
app.use('/school-authentication', schoolAuthenticationRouter);
app.use('/refresh-token', refreshRouter);

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});