import * as firebase from 'firebase';
import axios from "axios";


const config = {
    apiKey: "AIzaSyCNKewAtGTqxJ6QcjtNivuQScEl461GNwU",
    authDomain: "sana-tax-phone.firebaseapp.com",
    databaseURL: "https://sana-tax-phone.firebaseio.com",
    projectId: "sana-tax-phone",
    storageBucket: "sana-tax-phone.appspot.com",
    messagingSenderId: "450940712430"
  };

let firebaseRef = firebase.initializeApp(config).database().ref("/");


export let searchUser = (user) => {
    return ( dispatch ) => {
        firebaseRef.child("contact").once("value").then(snap => {

            let clients = snap.val();

            let foundClients = clients.filter( client => {
                let companyName = client.companyName.toLowerCase();
                let contactName = client.contactName.toLowerCase();

                if(user === ""){
                    return undefined;
                }

                return ( companyName.indexOf(user.toLowerCase()) !== -1 ) || ( contactName.indexOf(user.toLowerCase()) !== -1 );
            });


            dispatch(foundUsers(foundClients));



        }).catch(err => {
            console.log(err);
        })
    }
}

export let allClients = (clients) => {
    return {
        type: "ALL_CLIENTS",
        clients
    }
}

export let foundUsers = (users) => {
    return {
        type: "FOUND_USERS",
        users
    }
}

export let fetchUsers = () => {
    return (dispatch) => {
        firebaseRef.child("contact").once("value").then(snap => {
            dispatch(allClients(snap.val()));
        }).catch(err => {
            console.log(err);
        })
    }
}


export let addToFire = (user) => {
    return (dispatch) => {

        firebaseRef.child("contact").once("value").then(snap => {

            if(snap.val() === null){
                firebaseRef.child("contact").set([{...user}]);
                alert("Client is saved");
                return;
            } 

            firebaseRef.child("contact").set([...snap.val(), user]);
            alert("Client is saved")

        }).catch(err => {
            console.log(err);
            alert("could not save client");
        })

    }
}

