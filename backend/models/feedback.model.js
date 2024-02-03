const mongoose = require('mongoose');
const db = require("../config/db");
const { Schema } = mongoose;

const PostSchema = new Schema({
    userId:{
        type:[Schema.Types.ObjectId],
        ref: 'users',
        require:true,
    },
    ImageUrl:{
        type:String,
    },
    review:{
        type:String,
        require:true,
        unique: true
    },
    rating:{
        type: Number,
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