import React from 'react';
import {Container} from '@mui/material';
import { useDispatch } from 'react-redux';

import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';

const App = () => {
  const dispatch = useDispatch();

  return (
      <Container maxWidth="lg">
        <Navbar />
        <Home />
      </Container>
  );
}

export default App;
