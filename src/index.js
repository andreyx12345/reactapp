import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './AppRouter';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#00bcd4',
        contrastText: '#fff',
      },
  },
});

ReactDOM.render(
<MuiThemeProvider theme={theme}>
    <AppRouter />
</MuiThemeProvider>, document.getElementById('root'));
// ReactDOM.render(<AppRouter user={admin} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
