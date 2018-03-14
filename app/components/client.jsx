import React, {Component} from "react";

const Client = (props) => {
    return (

        <div className="ContactCard ">
            <div className="ContactCard-wrapper">
                <div className="ContactCard-headings">
                    <h3> Company Name : <span>  { props.companyName.toUpperCase() } </span> </h3>
                    <h3> Contact Name : <span> { props.contactName.toUpperCase() } </span></h3>
                    <h3> Office Phone : <span> { props.officePhone.toUpperCase() } </span> </h3>
                    <h3> Cell Phone : <span> { props.cellPhone.toUpperCase() } </span> </h3>
                    <h3> Email Address : <span> { props.email.toUpperCase() } </span> </h3>
                    <h3> Fax Number : <span> { props.fax.toUpperCase() } </span> </h3>
                    <h3> Company Location : { props.location.toUpperCase() } </h3>
                </div>
            </div>
        </div>
    )
}

export default Client;