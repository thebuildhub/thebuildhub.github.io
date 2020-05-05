import React from 'react';
import './App.css';

function HelloBox(props){
    return (
        <div className = "helloBox">
            <h1>{ props.name}</h1>
            <p> {props.para}</p>
            <h3>{props.email}</h3>
        </div>
    )
}
export default HelloBox