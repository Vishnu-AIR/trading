const mongoose = require('mongoose');
const db = require("../config/db");
const { Schema } = mongoose;

const GroupSchema = new Schema({
    name:{
        type:String,
        lowercase: true,
        require:true,
        unique: true
    },
    descrption:{
        type:String,
    },
    members:{
        type:[Schema.Types.ObjectId],
        ref: "users"
    },
    updatedOn: { type: Date },
    createdOn: { type: Date }
});


GroupSchema.pre('save', async function(next) {
   
    this.updatedOn = new Date();
    this.createdOn = new Date();

    
    next();
});


GroupSchema.pre('findOneAndUpdate', function(next) {


    const update = this.getUpdate();
    delete update._id;

    this.updatedOn = new Date();

    
     

    next();

    // Hash the password
    
});



const groupModel = db.model('groups',GroupSchema);

module.exports = groupModel;