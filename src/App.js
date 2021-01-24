import React from "react";
import ContactsContainer from "./components/Contacts/ContactsContainer";
import s from "./components/Styles/styles.module.css"
import Header from "./components/Header/Header";
import Preloader from "./components/common/preloader/preloader";
import {initializationApp} from "./redux/appReducer";
import {Route} from "react-router-dom";
import {getUsersData} from "./redux/contactsSelectors";
import ContactsInfo from "./components/Contacts/ContactsInfo/contactsInfo";
import {connect} from "react-redux";
import {setUsers} from "./redux/contactsReducer";


const App = (props) => {
    if (props.initialized  === false){
        props.initializationApp()
        return <Preloader/>
    }

  return (
    <div className={s.app}>
        <Header/>
        <div className={s.appFlex}>
        <ContactsContainer  userData={props.userData} setUsers={props.setUsers}/>
        <Route path='/:id' render={() =><ContactsInfo userData={props.userData} setUsers={props.setUsers}/> }/>
        </div>
    </div>
  );
}

let mapStateToProps = (state) => {
    return{
        initialized: state.app.initialized,
        userData: getUsersData(state)
    }
}

export default connect(mapStateToProps,{ initializationApp, setUsers})(App);
