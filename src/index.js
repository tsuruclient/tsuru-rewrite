import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

// import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import App from './container/App';

//window.Perf = require('react-addons-perf');

const theme = createMuiTheme();

injectTapEventPlugin();
ReactDOM.render(
    <Provider store={store()}>
        <MuiThemeProvider theme={theme}>
            <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
);
// registerServiceWorker();
