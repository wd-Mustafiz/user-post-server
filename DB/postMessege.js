const mongoose = require('mongoose')
const postMessegeSchema = new mongoose.Schema({
    title: String,
    messege:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})
const PostMessege = new mongoose.model('PostMessege',postMessegeSchema)

module.exports = PostMessege;