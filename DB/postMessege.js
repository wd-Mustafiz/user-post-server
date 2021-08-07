const mongoose = require('mongoose')
const postMessegeSchema = new mongoose.Schema({
    title: String,
    messege:String,
    name:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likes: { type: [String], default: [] },
    createdAt:{
        type:Date,
        default:new Date()
    }
})
const PostMessege = new mongoose.model('PostMessege',postMessegeSchema)

module.exports = PostMessege;