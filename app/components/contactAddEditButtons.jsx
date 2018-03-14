import React, { Component } from "react";
import { Link } from 'react-router-dom'


class ContanctButtons extends Component{
    constructor(props){
        super(props);

        this.state = {};


    }

    render(){
        return(
            <section className="contactAddEditButton">
                <div className="contactAddEditButton-container">
                    <div className="ContactAddEditButton-wrapper">
                        <Link className="add-client" to="/add">Add Contact</Link>

                    </div> 
                </div>
            </section>
        )
    }
}

export default ContanctButtons;