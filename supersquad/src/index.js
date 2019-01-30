
// React is the library used for all react code such as components
import React from 'react';

// ReactDOM handles rendering react components into the screen
import ReactDOM from 'react-dom';

// Import the main application component
import App from './components/App';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Import root reducer
import rootReducer from './reducers';

// Actions
import { addCharacterById } from "./actions";


// Create store
const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()));
store.dispatch(addCharacterById(2));

// Render the main component into the root div element
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

