const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message-controller');


router.route("/partnerMessage").post(messageController.partnerMessage);
router.route("/investMessage").post(messageController.investMessage);
router.route("/subscribeUs").post(messageController.subscribeEmail);


module.exports=router;