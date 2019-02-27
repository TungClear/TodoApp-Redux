import React from 'react';

class ListTodo extends React.Component {

    getListTodo = () => {
        const { searchText, todoList } = this.props.todos;
        // console.log(`searchText: ${searchText}`);
        // console.log(`todoList: ${todoList}`);
        if(!searchText){
            return todoList;
        }else{
            const upper = searchText[0].toUpperCase();
            const upperValue = searchText.replace(searchText[0], upper);
            return todoList.filter(
                todo =>
                    todo.indexOf(searchText) > -1 ||
                    todo.indexOf(upperValue.toUpperCase()) > -1
            );
        }
    }

    render() {
        const { actions } = this.props
        const todoList = this.getListTodo();
        return (
            <table className="todoTable">
                <thead>
                    <tr>
                        <th className="todoNumber">#</th>
                        <th className="todoItem">Task</th>
                        <th>(X)</th>
                    </tr>
                    {todoList.map((row, index) => (
                        <tr key={index}>
                            <td className="todoNumber">Task {index + 1}</td>
                            <td className="todoItem">{row}</td>
                            <td><button className="remove" onClick={() => actions.deleteTodo(index)}>X</button></td>
                        </tr>
                    ))}
                </thead>
            </table>
        );
    }
}

// function mapStateToProps(state){
//     return {
//         todoList: state.todoList
//     }
// }

export default ListTodo;