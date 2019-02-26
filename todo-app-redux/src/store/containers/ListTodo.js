import React from 'react';
import {connect} from 'react-redux';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th className="todoNumber">#</th>
                <th className="todoItem">Task</th>
                <th>(X)</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {

    return (
        <tbody>
            <tr>
                <td className="todoNumber">Task</td>
                <td className="todoItem"></td>
                <td><button className="remove" >X</button></td>
            </tr>
            <tr>
                <td className="todoNumber">Task</td>
                <td className="todoItem"></td>
                <td><button className="remove" >X</button></td>
            </tr>
            <tr>
                <td className="todoNumber">Task</td>
                <td className="todoItem"></td>
                <td><button className="remove" >X</button></td>
            </tr>
        </tbody>
    );
}


class ListTodo extends React.Component {

    render() {
        const { todoList, removeTodo } = this.props;
        return (
            <table className="todoTable">
                <TableHeader />
                <TableBody
                    todoList={todoList}
                    removeTodo={removeTodo}
                />
            </table>
        );
    }
}

function mapStateToProps(state){
    return {
        todoList: state.todoList
    }
}

export default connect(mapStateToProps)(ListTodo);