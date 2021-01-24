import {applyMiddleware, combineReducers, createStore} from "redux";
import contactsReducer from "./contactsReducer";
import thunkMiddleware  from 'redux-thunk'
import appReducer from "./appReducer";
let reducers = combineReducers({
    contactsPage: contactsReducer,
    app: appReducer
})


const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store