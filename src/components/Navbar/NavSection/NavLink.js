import React from "react";
import { Link } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi";

export default function NavLink({ label, to }) {
    return (
        <Link to={to} className="nav-sec-link">
            <h3>
                {label} <HiArrowSmRight size="1.5rem"/>
            </h3>
        </Link>
    );
}
