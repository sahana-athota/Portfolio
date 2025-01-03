import React from "react";

function Card(props) {
    return(
    <div class="card">
        
        <div class='texts'>
            <h1>{props.title}</h1>
            <p>{props.cont}</p>
            <a class="playstore-button" href={props.link}>
            <span class="button_text">
            <span class="text-1">VIEW IT IN</span>
            <span class="text-2">Github</span>
            </span>
            </a>
        </div>
        <img src={props.img} />
    </div>
    );
  
}

export default Card;