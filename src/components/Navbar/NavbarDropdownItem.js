import React from "react";
import { Link } from "react-router-dom";

export default function NavbarDropdownItem({ children, to ,type}) {
    return (type==="internal-link")?(
    
        <Link to={to} style={{ textDecoration: "none" }}>
            <div className="nav-dropdown-item">{children}</div>
        </Link>
    	):
    	(
    	<a href={to} style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
            <div className="nav-dropdown-item">{children}</div>
        </a>
    	)
    	;
}
