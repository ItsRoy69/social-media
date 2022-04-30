import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

import useStyles from './styles.js';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';


const Home = () => {

    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <>
          <Grow in>
            <Container>
              <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
               <Grid item xs={12} sm={7}>
                 <Posts setCurrentId={setCurrentId} />
               </Grid>
               <Grid item xs={10} sm={4}>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
               </Grid>
              </Grid>
            </Container>
          </Grow>
        </>
  )
}

export default Home
