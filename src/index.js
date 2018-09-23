import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { theme } from './config/muiTheme';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
  , document.getElementById('root'));
registerServiceWorker();
