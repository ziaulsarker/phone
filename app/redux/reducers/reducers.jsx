
export const searchReducer = (state = "", action) => {
    switch(action.type){
        case "SEARCH_USER" : 
            return action.user;

        default: 
            return state;
    }    
} 


export let foundUsers = ( state = [], action ) => {
    switch(action.type){
        case "FOUND_USERS" : 

            let foundUsers = [
                ...action.users
            ];

            return foundUsers;

        default : 
            return state;
    }
}


export let fetchReducer = (state = [], action) => {
    switch(action.type){
        case "ALL_CLIENTS" :

            let contacts = [
                ...action.clients
            ];

            return contacts;

        default :

            return state;
        
    }
}





    

    