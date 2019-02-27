import React, { Component } from 'react';
import './App.css';

import FormNewTodo from '../components/FormNewTodo';
import FormSearch from '../components/FormSearch';
import ListTodo from '../components/ListTodo';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/TodoAction';

class App extends Component {
  render() {
    const { todos, actions } = this.props;
    // console.log(`this.props: ${this.props.toString()}`);
    // console.log(`todoList: ${todos}`);
    // console.log(`actions: ${actions}`);
    return (
      <React.Fragment>
        <div className="titles">
          <h1 className="title">React To-Do App</h1>
          <h2 className="subtitle">Enhance Your Productivity</h2>
        </div>
        <FormNewTodo todos={todos} actions={actions}/>
        <FormSearch actions={actions}/>
        <ListTodo todos={todos} actions={actions}/>
        <button className="clear" onClick={actions.clearTodoList}>Clear the List</button>
        <button className="reset" onClick={actions.resetTodoList}>Reset the List</button>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
