import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser, addToFire, fetchUsers } from  "Actions";
import {allClients} from '../redux/actions/actions';



class Add extends Component{
    constructor(props){
        super(props);

        this.state = {};

        this.addClient = this.addClient.bind(this);
    }


    addClient(e){
        e.preventDefault();

        let { dispatch } = this.props;  
        let client = {
            companyName : this.companyName.value,
            contactName: this.contactName.value,
            officePhone: this.officePhone.value,
            cellPhone: this.cellPhone.value,
            email: this.email.value,
            fax: this.fax.value,
            location: this.location.value
        };



        let resetValue = () => {
            this.companyName.value = "";
            this.contactName.value = "";
            this.officePhone.value = "";
            this.cellPhone.value = "";
            this.email.value = "";
            this.fax.value = "";
            this.location.value = "";

        };

        resetValue();
        dispatch( addToFire(client) );

    }


    render(){
        return(
            <section className="AddSection">
                <a href="#/" className="back-section"> Back to Clients </a>
                <div className="AddContact">
                    <h1> Add New Client </h1>
                    <form onSubmit={ this.addClient }>

                        <div className="input-container">
                            <label>Company Name</label>
                            <input type="text" ref={ ( input ) => { this.companyName = input } } />
                        </div>


                        <div className="input-container">
                            <label>Contact Name</label>
                            <input type="text" ref={ ( input ) => { this.contactName = input } }/>
                        </div>


  

                        <div className="input-container">
                            <label>Office Phone</label>
                            <input type="tel" ref={ ( officePhone ) => { this.officePhone = officePhone } }/>
                        </div>

                        <div className="input-container">
                            <label>Cell Phone</label>
                            <input type="tel" ref={ ( input ) => { this.cellPhone = input } }/>
                        </div>

                        <div className="input-container">
                            <label>Email</label>
                            <input type="emial" ref={ ( input ) => { this.email = input } }/>
                        </div>
                        

                        <div className="input-container">
                            <label>Fax</label>
                            <input type="emial" ref={ ( input ) => { this.fax = input } }/>
                        </div>

                        <div className="input-container">
                            <label>Location</label>
                            <input type="emial" ref={ ( input ) => { this.location = input } }/>
                        </div>


                        <div className="button-container">
                            <button type="submit"> Add Client</button>
                        </div>

                        
                    </form>
                </div>

            </section>
        )
    }
}

export default connect((state) => {
    return {
        contacts : state.contacts
    }
})(Add);