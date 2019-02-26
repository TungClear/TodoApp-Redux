import React from 'react';
import {connect} from 'react-redux';

class FormSearch extends React.Component{

    render() {
        return (
            <form>
                <input type="text" className="search" placeholder="filter list"/>
            </form>
        );
    }
}

function mapStateToProps(state){
    return{
        searchText: state.searchText
    }
}

export default connect(mapStateToProps)(FormSearch);