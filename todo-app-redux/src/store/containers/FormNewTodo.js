import React from 'react';
import {connect} from 'react-redux';

class FormNewTodo extends React.Component{

    inputText = "";

    addTodo = () => {
        //gọi add todo từ bên app
        this.props.dispatch({type: 'ADD_TODO'});
    }

    handleOnChange = (event) => {
        //thay đổi input thì giá trị sẽ chui vào đâu đó
        const value = event.target;
        this.inputText = value;
    }   

    render(){
        return(
            <form>
                <input type="text" className="newTodo" value={this.props.todo} placeholder="create new work item" onChange={this.handleOnChange}/>
                <br />
                <button type="button" className="enter" onClick={this.addTodo}>Enter New Item</button>
            </form>
        );
    }
}

function mapStateToProps(state){
    return{
        todo: state.todo
    }
}

//tạo dispatch add todo tại đây
//rồi tại onClick sẽ this.props.addTodo

export default connect(mapStateToProps)(FormNewTodo);