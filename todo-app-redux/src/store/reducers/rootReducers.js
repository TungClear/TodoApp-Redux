import { combineReducers } from 'redux';
import todosReducers from './todoReducer';
import dogsReducer from './dogReducer';
const rootReducer = combineReducers({
    todos: todosReducers,
    dogs: dogsReducer
});

export default rootReducer;