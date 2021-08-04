import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles'
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';
import {setCurrentId} from '../../../Redux/Actions/currentId'
import {deletePost,likeCount} from '../../../Redux/Actions/posts'
import {useDispatch} from 'react-redux'
import '../../../index.css'
const Post = ({post}) => {
    const [show , setShow] = useState(true)
    const dispatch = useDispatch()
    const classes = useStyles()
    const handleEdit = () => {
        dispatch(setCurrentId(post._id))
    }
    const handleDelete = () => {
        setShow(false)
        dispatch(deletePost(post._id))
        
    }
    return (
        <Card className={`${classes.card} postCard`} display={show ? `block` : `none`}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={`${classes.overlay2} overlayEdit`}>
                <Button style={{color:'white'}} size="small" onClick={handleEdit}>
                    <EditIcon fontSize="medium"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map(tag => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h6">{post.title}</Typography>
            <CardContent>
            <Typography variant="body2" component="p" color="textSecondary">{post.messege}</Typography>
            
            </CardContent>        
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likeCount(post._id))}>
                    <ThumbUpIcon fontSize="small"/>Like &nbsp; {post.likeCount}
                </Button>
                <Button size="small" color="secondary" onClick={handleDelete}>
                    <DeleteIcon fontSize="small"/>Delete
                </Button>
            </CardActions>
        </Card> 
    );
};

export default Post;