import React, {useState, useRef,useEffect}  from 'react'
import s from "../../Styles/styles.module.css"

const Search = (props) => {
    let userId = props.userId
    if (!userId) {
        userId = 0
    }
    let inputRef = useRef(null)
    let [value] = useState(inputRef)

    //subscribe to Redux changes
    useEffect(()=>{
        dataSearch()
    },[props.userData])

    const dataSearch = () => {
        const inputValue = value.current.value.toLowerCase();
            const filter = props.userData.filter(user => user.name.toLowerCase().includes(inputValue))
            props.editStateUsers(filter)
        }
    return <div className={s.search}>
        <input className="form-control mr-sm-2 " onChange={dataSearch} type="search" placeholder="Search" aria-label="Search" ref={inputRef}/>
    </div>
}

export default Search;