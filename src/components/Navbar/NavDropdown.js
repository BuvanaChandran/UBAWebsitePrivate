import React from "react";

export default function NavDropdown({ multiple, children }) {
    return <div className={`nav-dropdown-container ${multiple ? "multiple" : ""}`}>{children}</div>;
}
