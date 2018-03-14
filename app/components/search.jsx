import React, { Component } from "react";
import { connect } from "react-redux";
import { searchUser } from "Actions";


class Search extends Component{
    constructor(props){
        super(props);
        this.state = {}; 
    }

    handleChange(){
        let { dispatch, search } = this.props;

        let hasSearch = this.search.value;

        dispatch(searchUser(this.search.value));
        
    }

    render(){

        let { search } = this.props;

  
        return (
            <form className="search-form">
                <label className="search-label">Search For Client</label>   
                <input type="text" className="search" placeholder={"Search Company Contact"} onChange={ this.handleChange.bind(this) } ref={ (input) => { this.search = input; }}/>
            </form>
        )
    }
}


export default connect( (state) => {

    return {
        search: state.search
    }
})(Search);