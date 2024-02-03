const mongoose = require('mongoose');
const db = require("../config/db");
const { Schema } = mongoose;

const MessageSchema = new Schema({
    sender:{
        type: [Schema.Types.ObjectId],
        ref: "users",
        require:true,
    },
    recipient:{
        type: [Schema.Types.ObjectId],
        ref: "users",
        require:true,
    },
    text:{
        type:String,
    },
    file:{
        type: String,
    },
    updatedOn: { type: Date },
    createdOn: { type: Date }
});

MessageSchema.pre('save', async function(next) {
   
    this.updatedOn = new Date();
    this.createdOn = new Date();
    
    next();
});

MessageSchema.pre('findOneAndUpdate', function(next) {


    const update = this.getUpdate();
    delete update._id;

    this.updatedOn = new Date();

    next();

    // Hash the password
    
});

const messageModel = db.model('messages',MessageSchema);

module.exports = messageModel;