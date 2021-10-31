const express = require('express');
const router = express.Router();
const multer = require('multer');
const Plogging = require('../models/plogging');
const tokens = require('../modules/token');
const moment = require('moment-timezone');
// Token 실패 코드
const TOKEN_EXPIRED = require('../modules/token').TOKEN_EXPIRED;
const TOKEN_INVALID = require('../modules/token').TOKEN_INVALID;

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../PLOGGING-RESULT-IMAGES/'); // 해당 경로에 폴더가 있는지 확인.. 없으면 에러
  },
  filename: function (req, file, cb) {
    let extArray = file.mimetype.split('/');
    let extension = extArray[extArray.length - 1];
    cb(null, Date.now() + '.' + extension); // 확장자 붙여서 저장
  },
});

const upload = multer({
  limits: { filesize: 50 * 1024 * 1024 },
  storage: storage,
});

router
  .route('')
  .post(upload.single('image'), async (req, res) => {
    var ploggingUpdateResult = { success: false };
    let userAccessToken = req.body.access_token;
    //////////////////// 토큰 검증
    let token = await tokens.access.verify(userAccessToken);
    // 적합하지 않은 토큰이면
    if (TOKEN_EXPIRED === token) {
      ploggingUpdateResult.description = 'token expired';
      res.json(ploggingUpdateResult);
    } else if (TOKEN_INVALID === token) {
      ploggingUpdateResult.description = 'token invalid';
      res.json(ploggingUpdateResult);
    }
    // 적합한 토큰이면
    userId = token.user_id;

    // litter 모델로 DB에 row 추가
    var litter_id;
    Plogging.create({
      user_id: userId,
      duration_time: req.body.duration_time,
      distance: req.body.distance,
      date: moment().tz('Asia/Seoul').format('YYYY-MM-DD'),
      photo: req.file.filename,
      plastic_count: req.body.plastic_count,
      vinyles_count: req.body.vinyles_count,
      glasses_count: req.body.glasses_count,
      cans_count: req.body.cans_count,
      papers_count: req.body.papers_count,
      trash_count: req.body.trash_count,
      count_of_badge_got: req.body.count_of_badge_got,
    })
      .then((litter_result) => {
        ploggingUpdateResult.success = true;
        ploggingUpdateResult.description = '플로깅 결과를 서버에 저장했습니다.';
        console.log('플로깅결과 저장');
        res.json(ploggingUpdateResult);
        console.log('플로깅 쓰레기 정보 저장');
      })
      .catch((err) => {
        ploggingUpdateResult.description =
          '플로깅 정보를 서버에 저장하지 못했습니다.';
        console.error(err);
        res.json(ploggingUpdateResult);
      });
  })
  .get(async (req, res) => {});

module.exports = router;