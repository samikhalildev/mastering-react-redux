import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { fetchMemes } from "./actions";


const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchMemes());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
