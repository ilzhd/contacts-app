import React, {useState} from "react";
import s from "./contactsInfo.module.css"
import user from "../../assets/image/user.png"
import {NavLink, withRouter} from "react-router-dom";

const name = 'name'
const phone = 'phone'
const email = 'email'
const country = 'country'
const city = 'city'

const ContactsInfo = (props) => {
    let userId = props.match.params.id

    let [editMode, setEditMode] = useState(false);
    let [stateUsers, editStateUsers] = useState(() => props.userData)
    const submitEdit = () => {
        props.setUsers(stateUsers)
        setEditMode(false)
    }
//this function takes a new value and object key
    let editUser = (e, type) => {
        let value = e.target.value
        switch (type) {
            case name:
                return editStateUsers(stateUsers.filter(user => user.id == userId ? {
                    ...user,
                    name: [...user.name = value]
                } : user))
            case phone:
                return editStateUsers(stateUsers.filter(user => user.id == userId ? {
                    ...user,
                    phone: [...user.phone = value]
                } : user))
            case email:
                return editStateUsers(stateUsers.filter(user => user.id == userId ? {
                    ...user,
                    email: [...user.email = value]
                } : user))
            case country:
                return editStateUsers(stateUsers.filter(user => user.id == userId ? {
                    ...user,
                    country: [...user.address.country = value]
                } : user))
            case city:
                return editStateUsers(stateUsers.filter(user => user.id == userId ? {
                    ...user,
                    city: [...user.address.city = value]
                } : user))
            default:
                alert("Error type does not exist")
        }
    }


    return <div className={s.contactsInfo}>
        <div className={s.button}>
        <NavLink to={'/'}>
            <button type="button" className="btn btn-dark">Back</button>
        </NavLink>
            {!editMode &&
            <button type="button" className="btn btn-dark" onClick={() => setEditMode(true)}>edit</button>}
            {editMode && <button type="button" className="btn btn-dark" onClick={submitEdit}>Submit</button>}
        </div>
        <div className={s.imageContainer}>
            <div><img src={user}/></div>
        </div>
        <div className={s.contactsContainer}>
            <div className={s.item}>
                <div>Name:</div>
                {!editMode &&
                <div>
                    <span className={s.items}>{stateUsers[userId].name}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input className={s.items} value={stateUsers[userId].name} onChange={(e) => editUser(e, name)}/>
                </div>
                }
            </div>
            <div className={s.item}>
                <div>Phone:</div>
                {!editMode &&
                <div>
                    <a className={s.items} href={"tel:" + stateUsers[userId].phone}>
                        <span>{stateUsers[userId].phone}</span>
                    </a>
                </div>
                }
                {editMode &&
                <div>
                    <input className={s.items} value={stateUsers[userId].phone}
                           onChange={(e) => editUser(e, "phone")}/>
                </div>
                }
            </div>
            <div className={s.item}>
                <div>Email:</div>
                {!editMode &&
                <div>
                    <span>
                    <a href={"tel:" + stateUsers[userId].email}>{stateUsers[userId].email}</a>
                    </span>
                </div>
                }
                {editMode &&
                <div>
                    <input value={stateUsers[userId].email} onChange={(e) => editUser(e, email)}/>
                </div>
                }
            </div>
            <div className={s.item}>
                <div>Country:</div>
                {!editMode &&
                <div>
                    <span>{stateUsers[userId].address.country}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input value={stateUsers[userId].address.country} onChange={(e) => editUser(e, country)}/>
                </div>
                }
            </div>
            <div className={s.item}>
                <div>City:</div>
                {!editMode &&
                <div>
                    <span>{stateUsers[userId].address.city}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input value={stateUsers[userId].address.city}
                           onChange={(e) => editUser(e, city)}/>
                </div>
                }
            </div>
        </div>
    </div>
}
export default withRouter(ContactsInfo)