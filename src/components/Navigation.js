import React from "react";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <ul className="header" >
           <li> <NavLink exact to="/" >Home</NavLink> </li>
           <li> <NavLink to="/about" >About</NavLink> </li>
        </ul>
    )
};

export default Navigation;