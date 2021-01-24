import React from "react";
import s from './preloader.module.css'
import preloaderImage from "../../assets/image/Spinner-1s-200px.svg"

let Preloader = () =>{
    return <div>
        < img src={preloaderImage} className={s.image}/>
    </div>
}

export default Preloader;