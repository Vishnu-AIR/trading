const verificationRouter = require('express').Router();
const VerfificationController = require("../controller/verfication.controller")

verificationRouter.post('/verifyemail',VerfificationController.verifyEmail)
verificationRouter.post('/verifyphone',VerfificationController.verifyPhone)

module.exports = verificationRouter;