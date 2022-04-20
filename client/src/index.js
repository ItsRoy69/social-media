import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {createTheme} from '@mui/material';
import {ThemeProvider} from '@mui/styles';

import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const theme = createTheme()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);