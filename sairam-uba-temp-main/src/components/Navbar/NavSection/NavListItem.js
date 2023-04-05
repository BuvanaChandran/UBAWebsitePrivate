import React from "react";
import { Link } from "react-router-dom";
import "./NavListItem.css";
export default function NavListItem({ children, to ,type }) {
    return (
        <li>
            {(type==="internal-link")?
            	(<Link to={to}>{children}</Link>):
            	(<a href={to} className="a-external-link" target="_blank" rel="noreferrer">{children}</a>)}
        </li>
    );
}
