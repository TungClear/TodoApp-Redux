import React, { Component } from 'react';
import './App.css';

import FormNewTodo from '../components/FormNewTodo';
import FormSearch from '../components/FormSearch';
import ListTodo from '../components/ListTodo';
import ListDogs from '../components/ListDogs';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/TodoAction';
import * as DogActions from '../actions/DogAction';
// import fetchDogs from '../actions/DogAction';

// const url = 'https://api.thedogapi.com/v1/images/search';
// var dataApi = [];

class App extends Component {

  // getDataApi = () => {
  //   return fetch(url)
  //   .then(handleErrors)
  //   .then(response => response.json())
  //   .then(result => {
  //       console.log(this.props);
  //       return result;
  //   })
  //   .catch(error => console.log(error));
  // }

  componentDidMount() {
    this.props.dogActions.fetchDogs();
    console.log(this.props);
  }

  render() {
    const { todos, todoActions, dogs } = this.props;
    console.log(dogs.items);
    return (
      <React.Fragment>
        <div className="titles">
          <h1 className="title">React To-Do App</h1>
          <h2 className="subtitle">Enhance Your Productivity</h2>
        </div>
        {/* <FormNewTodo todos={todos} actions={todoActions} />
        <FormSearch actions={todoActions} />
        <ListTodo todos={todos} actions={todoActions} />
        <button className="clear" onClick={todoActions.clearTodoList}>Clear the List</button>
        <button className="reset" onClick={todoActions.resetTodoList}>Reset the List</button> */}
        <ListDogs dogs={dogs.items} />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    dogs: state.dogs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(TodoActions, dispatch),
    dogActions: bindActionCreators(DogActions, dispatch),
    // fetchDogs: bindActionCreators(fetchDogs, dispatch),
    // bindActionCreators({fetchDogs:fetchDogs}, dispatch)
  };
}

function handleErrors(response) {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
