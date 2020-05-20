import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
//conexiunea intre react si redux
import {Provider} from 'react-redux';
//importam state-ul din store si pentru a fi vizibil in toate componentele il trimitem ca PROPS lui "store"
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter> 
            <App /> 
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
