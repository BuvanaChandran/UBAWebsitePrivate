import React from "react";
import "./NavSection.css";

export default function NavSection({ children, single }) {
    return <div className={`nav-section ${single ? "nav-sec-single" : ""}`}>{children}</div>;
}
