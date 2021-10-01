const express = require('express');
const app = express();
const router = express.Router();
const User = require('../models/user');
const tokens = require('../modules/token');

// 미들웨어 설정
app.use(express.json());

// 로그인
router.post('', async (req, res) => {
  let user_id = req.body.user.user_id;
  let password = req.body.user.password;
  let login_result = {
    description: 'failed',
    tokens: { access_token: null, refresh_token: null },
  };
  try {
    const user_in_db = await User.findAll({
      where: { user_id: user_id, password: password },
    });
    // DB에 있다면
    if (user_in_db.length > 0) {
      login_result.description = 'successed';
      // access, refresh 토큰 발급
      login_result.tokens.refresh_token = await tokens.refresh.sign(user_id);
      login_result.tokens.access_token = await tokens.access.sign(user_id);
    }
    // DB에 없다면
    else {
      login_result.description = 'failed';
    }
  } catch (err) {
    console.error(err);
  }
  res.json(login_result);
});

module.exports = router;