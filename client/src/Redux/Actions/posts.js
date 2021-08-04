import axios from 'axios'
import * as api from '../../api/index'
// import axios from 'axios'
//action creators 
export const getPosts = () => {
    return async (dispatch) => {
        try {
            // const {data} = await axios.get('http://localhost:4000/posts')
            const {data} = await api.fetchPosts()
            dispatch({type: 'FATCH_ALL', payload: data})
        } catch (error) {
            console.log(error);
        }
    }
}
export const createPost = (post) => {
    return async (dispatch) => {
        try {
            // const {data} = await axios.post('http://localhost:4000/posts', post)
            const {data} = await api.createPost(post)
            dispatch({type:'CREATE_POST',payload:data})
        } catch (error) {
           console.log(error); 
        }
    }
}
export const updatePost = (id,post) => {
    return async (dispatch) => {
        try {
            // const {data} = await axios.patch(`http://localhost:4000/posts/${id}`, post)
            const {data} = await api.updatePost(id,post)
            dispatch({type:'UPDATE' , payload:data})
        } catch (error) {
            console.log(error);
        }
    }
}
export const deletePost = (id) => {
    return async (dispatch) => {
        try {
            // const {data} = await axios.delete(`http://localhost:4000/posts/${id}`)
            await api.deltePost(id)
            dispatch({type:'DELETE_POST' , payload:id})
        } catch (error) {
            console.log(error);
        }
    }
}
export const likeCount = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await api.likeCount(id)
            dispatch({
                type:'LIKE_COUNT',
                payload:data
            })
        } catch (error) {
            console.log(error);
        }
    }
}