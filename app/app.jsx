"use strict";

import React from "react";
import ReactDOM from "react-dom";
import "style-loader!css-loader!sass-loader!./style/app.scss";



import Main from  "MainComponent";
import Add from "Add";
import Edit from "Edit";



import { config } from "Store";
import { Provider, connect} from "react-redux";
import { addUser, addToFire, fetchUsers } from  "Actions";

import {
    HashRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';  


let store = config();



let unsubscribe = store.subscribe(() => {
    console.log("new state: " , store.getState());

});



const appMountNode = document.getElementById("root");


ReactDOM.render( 
<Provider store={ store }>
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={ Main }></Route>
                <Route exact path="/add" component={Add}></Route>
                <Route  exact path="/edit" component={ Edit }></Route>
            </Switch>
        </div>
    </Router>
</Provider>,

 appMountNode );


