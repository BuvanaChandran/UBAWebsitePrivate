import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ label, to, children, dropdown, multiple }) {
    return dropdown ? (
        <div className="nav-item" style={{ position: multiple ? "initial" : "relative" }}>
            <div>
                <span>{label}</span>
                <div className="hover-line" />
            </div>
            {React.isValidElement(children) ? React.cloneElement(children, { multiple }) : null}
        </div>
    ) : (
        <Link to={to} className="nav-item">
            <div>
                <span>{label}</span>
                <div className="hover-line" />
            </div>
        </Link>
    );
}
