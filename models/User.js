
// import mongoose 
const mongoose = require('mongoose');

// creating user schema
const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        },

        role:{
            type:String,
            required:true,
        },

        reviewAssigned:[
            {   
                type:mongoose.Schema.Types.ObjectId,
                ref:'User'
            }
        ],
        feedbackByOthers:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'Feedback'
            },
        ]
    },
    {
        timestamps:true,
    }
)

// creating a new model from schema
const User = mongoose.model('User',userSchema);

// export schema
module.exports = User;