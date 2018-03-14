import redux, { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { searchReducer, fetchReducer, foundUsers } from "Reducers";

import thunk from "redux-thunk";

export const config = () => {

    let reducers = combineReducers({
        search : searchReducer,
        contacts: fetchReducer,
        foundUsers: foundUsers
    })

    let store = createStore(reducers, {}, compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))

    return store;
    
}

