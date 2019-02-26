import React, { Component } from 'react';
import './App.css';

import FormNewTodo from '../store/containers/FormNewTodo';
import FormSearch from '../store/containers/FormSearch';
import ListTodo from '../store/containers/ListTodo';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initTodoList = [
  "Finish Redux Tutorials",
  "Learn more about Relay",
  "Build 5 more React apps",
  "Review React Component Lifecycle",
  "Obtain Data Visualization Certificate",
  "Review Algorithms",
  "Tweet Progress",
  "Get a coffee!",
  "Browse Google Fonts",
  "Learn more about React Native"
];
const initialState = {
  todoList: initTodoList,
  tempList: initTodoList,
  searchText: "",
  
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
    //add a todo to todoList
      return {
        todoList: [...state.todoList, todo],
        tempList: [...state.tempList, todo]
      };
    case 'REMOVE_TODO':
      //remove a todo to todoList
      return state;
    case 'FILTER_TODO':
      //return list todo which after filter
      return state;
    case 'CLEAR_TODO':
      //delete todoList recent
      return state;
    case 'RESET_TODO':
      //display todoList
      return state;
    default:
      return state
  }
}
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="titles">
          <h1 className="title">React To-Do App</h1>
          <h2 className="subtitle">Enhance Your Productivity</h2>
        </div>
        <FormNewTodo />
        <FormSearch />
        <ListTodo />
        <button className="clear">Clear the List</button>
        <button className="reset">Reset the List</button>
      </Provider>
    );
  }
}

export default App;
