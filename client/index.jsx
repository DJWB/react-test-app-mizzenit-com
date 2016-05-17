import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux'

import routes from "./routes.jsx"
import store from './store.jsx'

window.React = React;

const initialState = window.__INITIAL_STATE__ || {};

const __store = store(initialState);

render(
    <Provider store={__store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('content')
)
;