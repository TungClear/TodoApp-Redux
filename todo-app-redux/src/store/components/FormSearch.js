import React from 'react';

class FormSearch extends React.Component{

    handleSearch = (event) => {
        const {value} = event.target;
        this.props.actions.onChangeSearchText(value);
    }

    render() {
        return (
            <form>
                <input type="text" className="search" placeholder="filter list" onChange={this.handleSearch}/>
            </form>
        );
    }
}

// function mapStateToProps(state){
//     return{
//         searchText: state.searchText
//     }
// }

export default FormSearch;