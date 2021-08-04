import { Button, Paper, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useStyles from './styles'
import Filebase from 'react-file-base64'
import {createPost , updatePost} from '../../Redux/Actions/posts'
import {useDispatch , useSelector} from 'react-redux'
import { setCurrentId } from '../../Redux/Actions/currentId';
const From = () => {
    const [postData , setPostData] = useState({
        title:'',messege:'',creator:'',tags:'',selectedFile:''
    })
    const dispatch = useDispatch()
    const currentId = useSelector(state => state.currentId)
    const updatedPost = useSelector(state => currentId ? state.posts.find(p => p._id === currentId) : postData )
    
    const classes = useStyles()
    
    useEffect(() => {
        setPostData(updatedPost)
    },[updatedPost])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentId){
            dispatch(updatePost(currentId , postData))
        }else{
            dispatch(createPost(postData))
        }
        clear()
    }
    const clear = () => {
        dispatch(setCurrentId(null))
        setPostData({
            title:'',messege:'',creator:'',tags:'',selectedFile:''
        })
    }
    return (
        <Paper className={classes.paper}>
            <form noValidate  autoComplete="off" className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}> 
            <Typography  variant="h6">{currentId ? `Editing ${updatedPost.title}`: `Create a Memory`}</Typography>
                <TextField required  name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData , creator:e.target.value})}/>

                <TextField required  name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData , title:e.target.value})}/>

                <TextField multiline rows={4} required name="messege" variant="outlined" label="Messege" fullWidth value={postData.messege} onChange={(e) => setPostData({...postData , messege:e.target.value})}/>

                <TextField required  name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData , tags: e.target.value.split(',')})}/>

                <div className={classes.fileInput}>
                    <Filebase type="file" multiple={false} onDone={({base64}) => setPostData({...postData , selectedFile:base64})} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
            </Paper>
    );
};

export default From;    