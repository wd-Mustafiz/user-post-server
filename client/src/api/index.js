import axios from 'axios'

const url = 'https://mernuserpost.herokuapp.com/posts'

export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)
export const updatePost = (id,post) => axios.patch(`${url}/${id}` , post)
export const deltePost = (id) => axios.delete(`${url}/${id}`)
export const likeCount = (id) => axios.patch(`${url}/${id}/likeCount`)