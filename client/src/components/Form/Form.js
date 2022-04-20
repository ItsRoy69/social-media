import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';

import useStyles from './styles';


const Form = () => {
  const [postData, setPostData] = useState({ title: '', creator: '', message: '', selectedFile: ''});
  const classes = useStyles();

  const handleSubmit = () => {

  }

  const clear = () => {

  }

  return (
    <>
      <Paper className={classes.paper}>
        <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant='h6'> Creating a Memory</Typography>
            <TextField name='creator' label='Creator' variant='outlined' fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
            <TextField name="message" variant="outlined" label="Message" fullWidth multilinerows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
            <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />   
            <div className={classes.fileInput}>
              <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
            </div>
            <div className={classes.buttonSubmit}>
              <Button variant="contained" color="primary" size="large" type="submit" >Submit</Button>
            </div>
            <Button variant="contained" color="secondary" size="large" onClick={clear} >Clear</Button>     
        </form>
      </Paper>
    </>
  )
}

export default Form