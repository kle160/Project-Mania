import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({ creator: '', title: '', tags: '', selectedFile: '' })
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(post) setPostData(post);
    }, [post]) 

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        clear();        
    }

    const clear = () => {
        setCurrentId(null);
        setPostData(({ creator: '', title: '', tags: ''}));
    }
    
    return (
        < Paper className = {classes.paper}>
                <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant='h6'>{currentId ? 'Editing' : 'Creating'} a Task</Typography>
                    <TextField name='creator' variant='outlined' label='Requested By' fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
                    <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                    <TextField name='message' variant='outlined' label='Describe the task ' fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
                    <TextField name='tags' variant='outlined' label="Priority: #low, #medium, #high" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}/>
                    {/* <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})} /></div> */}
                    <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>Submit Ticket</Button>
                    <Button variant="contained" color="secdonary" size="large" onClick={clear} fullWidth>Clear Form</Button>
            </form>
        </Paper>
    );
}

export default Form;