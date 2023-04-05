import React from "react";
import "./ShadowContainer.css";

export default function ShadowContainer({ children, left }) {
    return <div className={`shadow-container ${left ? "shadow-left" : "shadow-right"}`}>{children}</div>;
}
