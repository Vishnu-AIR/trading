const mongoose = require('mongoose');
const db = require("../config/db");
const { Schema } = mongoose;

const PostSchema = new Schema({
    userId:{
        type:String,
        lowercase: true,
        require:true,
        
    },
    img:{
        type:String,
        require:true},
    name:{
        type:String,
        require:true},
    email:{
        type:String,
        require:true},

    ImageUrl:{
        type:String,
        default:""
    },
    Caption:{
        type:String,
        require:true,
    
    },
    likes:{
        type: [Schema.Types.ObjectId],
        ref: "users",
        default:[]
    },
    updatedOn: { type: Date },
    createdOn: { type: Date }
});

PostSchema.pre('save', async function(next) {
   
    this.updatedOn = new Date();
    this.createdOn = new Date();

    next();
});

PostSchema.pre('findOneAndUpdate', function(next) {

    const update = this.getUpdate();
    delete update._id;

    this.updatedOn = new Date();

    next();
    // Hash the password
    
});


const postModel = db.model('posts',PostSchema);

module.exports = postModel;
