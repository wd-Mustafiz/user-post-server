const express = require("express")
const { getPosts,createPost,updatePost,deletePost,likePost} = require("../controllers/posts")
const router = express.Router()
const auth = require('../middleware/auth')
router.get('/' , getPosts)
router.post('/', auth, createPost)
router.patch("/:id", auth, updatePost)
router.delete('/:id',auth, deletePost)
router.patch('/:id/likeCount', auth, likePost)

module.exports = router