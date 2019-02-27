import React from 'react';

class FormNewTodo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            todo: ""
        };
    }

    addTodo = () => {
        if(!this.state.todo){
            return;
        }else{
            this.props.actions.addTodo(this.state.todo);
            this.setState({
                todo: ""
            })
        }
    }

    handleOnChange = (event) => {
        const {value} = event.target;
        this.setState({
            todo: value
        })
    }   

    render(){
        // console.log(this.state.todo);
        return(
            <form>
                <input type="text" className="newTodo" placeholder="create new work item" onChange={this.handleOnChange} value={this.state.todo}/>
                <br />
                <button type="button" className="enter" onClick={this.addTodo}>Enter New Item</button>
            </form>
        );
    }
}

// function mapStateToProps(state){
//     return{
//         todo: state.todo
//     }
// }

export default FormNewTodo;