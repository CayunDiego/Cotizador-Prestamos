//import React, { Fragment } from 'react';
import React from 'react';
/*
function Header(props){
    console.log(props);
    return(
        <Fragment>
            <h1>{ props.titulo }</h1>
            <p>{ props.descripcion }</p>
        </Fragment>
    )
}*/
/*
function Header({titulo}){
    return(
        <Fragment>
            <h1>{ titulo }</h1>
        </Fragment>
    )
}*/

const Header = ({titulo}) => {
    return ( 
            <h1>{ titulo }</h1>
     );
}

export default Header;