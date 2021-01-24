import React from 'react'
import s from "../Styles/styles.module.css"
import {NavLink, withRouter} from "react-router-dom";
const Contacts = (props) => {
    return (
        <div className={s.contacts}>
            {
                props.stateUsers.map( u=> {
                    return <NavLink to={'/'+u.id } key={u.id} className={s.a} activeClassName={s.active}>
                            <li className="list-group-item" >{u.name}</li>
                    </NavLink>

                })
            }
        </div>
    )
}


export default withRouter(Contacts)