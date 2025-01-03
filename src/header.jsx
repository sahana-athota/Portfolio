import React from "react";

function Header(props) {
    console.log(props);
    if (props.c==1){
        return (
            <header id='intro'>
              <h2>Hi, I am</h2>
              <h1>Sahana Athota</h1>
            </header>
          );
    }
    else{
        return (
            <header class='headings'>
              <h2>{props.text}</h2>
            </header>
          );
    }
  
}

export default Header;