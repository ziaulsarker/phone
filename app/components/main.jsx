import React, { Component } from "react";
import Search from "Search";
import Buttons from "Buttons";
import FoundClients from "FoundClients";

import { connect } from "react-redux";
import { fetchUsers } from "Actions";

import {
    HashRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';  
import foundClients from "./foundClients";



class MainComponent extends Component{
    constructor(props){
        super(props);

        let { dispatch } = this.props;
        dispatch(fetchUsers());
    }

    render(){

        return (
     
            <div className="MainComponent">
                <Search></Search>
                <Buttons></Buttons>
                <FoundClients></FoundClients>
            </div>

        )
    }
}


export default connect( (state) => {
    return {
        allClients: state.contacts
    }
})(MainComponent);