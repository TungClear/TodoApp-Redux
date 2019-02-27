import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './store/containers/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducers';


// Create store
const store = createStore(rootReducer);

const appRoot = (
    <Provider store={store}>
        <React.Fragment>
            <App />
        </React.Fragment>
    </Provider>
)

ReactDOM.render(appRoot, document.getElementById('root'));

