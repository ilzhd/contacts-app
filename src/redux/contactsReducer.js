import {usersApi} from "../DAL/API/api";

const SET_USERS = 'SET_USERS'
const SEARCH_USER = 'SEARCH_USER'
const USER = 'USER'

let initialState = {
    users: []
}

let contactsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USERS: return {...state, users: action.users}
        //this case is needed to change redux-state for correct render
        case USER: return {
            ...state,
            users: state.users.filter(user => user.id == action.id ? {...user, name: action.value} : user)
    }
        default: return state
    }

}

export const setUsers = (users) => ({type: SET_USERS, users})
export const getUsers = () => (dispatch) => {
    return usersApi.getUsers()
        .then(data=>{
            dispatch(setUsers(data))
        })
}

export default contactsReducer;