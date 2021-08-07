//all the callback functions which are declear on the routes
const PostMessege = require('../DB/postMessege')
const mongoose = require('mongoose')
const getPosts = async (req,res) => {
    try {
        const postMesseges = await PostMessege.find()
        res.status(200).json(postMesseges)
    } catch (error) {
        res.status(404).send(error)
    }
}

const createPost = async (req,res) => {
    const post = req.body
    const newPost = new PostMessege({...post , creator: req.userId , createdAt: new Date().toISOString()})
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).send(error)
    }
}

const updatePost = async (req,res) => {
    //const id = req.params.id same as next line of code
    const {id:_id} = req.params
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(403).json("no post with that id")
    
    try {
        const existPost = await PostMessege.findByIdAndUpdate(_id , req.body , {new:true})
        if(existPost){
            console.log(existPost);
            return res.status(203).json(existPost)
        }
    } catch (error) {
        console.log(error);
    }
}

const deletePost = async (req,res) => {
    const id = req.params.id
    console.log(id);
    try {
        const existPost = await PostMessege.findByIdAndDelete({_id:id}) 
        if(!existPost) return res.status(403).json("no post with that id")
        console.log("delte successfully");
        return res.status(200).json("deelte success")       
    } catch (error) {
        console.log(error);
    }
}
const likePost =  async (req,res) => {
    const {id} = req.params
    
    try {
        if(!req.userId) return res.json("you can't like the post")
        const existPost = await PostMessege.findById({_id:id})
        
        const index = existPost.likes.findIndex((id) => id === String(req.userId))
        if(index === -1){
            existPost.likes.push(req.userId)
        }else{
            existPost.likes = existPost.likes.filter(id => id !== req.userId)
        }
        const updateLikePost =  await PostMessege.findByIdAndUpdate({_id:id} , existPost , {new:true})
        return res.status(203).json(updateLikePost)
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getPosts,createPost,updatePost,deletePost,likePost
 }