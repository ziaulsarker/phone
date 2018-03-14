import React, { Component } from "react";
import { connect } from "react-redux";
import Client from "Client";

class FoundClients extends Component{
    constructor(props){
        super(props);

    }

    render(){   
        let { foundClients } = this.props;

        const showClients = ( clients ) => {
            let clientsFound =  clients.map( (client, index) => {
                return <Client key={ index } { ...client } ></Client>
            } )

            

            return ( clientsFound.length)  ? clientsFound : ( <h2> No Clients Found </h2> );
        };

        return (
            <section className="FoundClients">
                <div className="FoundClients-container">
                    <div className="FoundClients-wrapper">


                        <div className="FoundClients-info">
                            { showClients(foundClients) } 
                        </div>





                    </div>
                </div>
            </section>
        )
    }
}


export default connect((state) => {
    return {
        foundClients: state.foundUsers
    }
})(FoundClients)