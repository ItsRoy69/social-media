import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';

import useStyles from './styles';


const Form = () => {
  const [postData, setPostData] = useState({ title: '', creator: '', message: '', selectedFile: ''});
  const classes = useStyles();

  const handleSubmit = () => {

  }
  return (
    <>
      <Paper className={classes.paper}>
        <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography variant='h6'> Creating a Memory</Typography>
            <TextField
              name='creator' 
              label='Creator'
              variant='outlined'
              fullWidth
              value={postData.creator}
              onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
             />
        </form>
      </Paper>
    </>
  )
}

export default Form