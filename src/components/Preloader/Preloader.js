import React from 'react'
import './Preloader.css'

const Preloader = ({ isPreloaderVision }) => {
    return (
        <div className= { isPreloaderVision ? "preloader" : "preloader preloader_invisible"} >
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
