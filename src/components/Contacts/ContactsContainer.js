import React, {useState} from 'react'
import Contacts from "./Contacts";
import s from "../Styles/styles.module.css"
import Search from "./Search/Search";

const ContactsContainer = (props) => {
    let [stateUsers, editStateUsers] = useState(props.userData)
    return <div className={s.contactsContainer}>
        <Search {...props} stateUsers={stateUsers} editStateUsers={editStateUsers}/>
        <Contacts {...props} stateUsers={stateUsers} editStateUsers={editStateUsers}/>
    </div>

}

export default ContactsContainer