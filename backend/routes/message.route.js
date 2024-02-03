const messageModel = require("../models/message.model");

const messageRouter = require("express").Router();



messageRouter.get("/:sid/:rid", async (req, res) => {
    try {
        const sender = req.params.sid;
        const reciver = req.params.rid;
      //console.log(req.user);
      const messages = await messageModel.find({
        sender:{$in:[sender,reciver]},
        recipient:{$in:[sender,reciver]},
      }).sort({createdOn: 1});
      
  
      return res.json({ success: true, data: messages, message: "here you go" });
    } catch (error) {
      return res.json({ success: false, message: error });
    }
  });


  module.exports = messageRouter;
