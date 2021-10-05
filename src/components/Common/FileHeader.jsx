import React from"react";
import "./Fileheader.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
export const FileHeader=({title})=>{
 
    return(
        <div className="Header">
            <FontAwesomeIcon icon={faCoffee} />
            <span className="spandata">{title}</span>
            </div>
    )
}