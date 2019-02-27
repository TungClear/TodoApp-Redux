import { combineReducers } from 'redux';
import todosReducers from './todoReducer';

const rootReducer = combineReducers({
    todos: todosReducers
});

export default rootReducer;