import React from "react"
import reactLogo from "../images/react-icon-small.png"

export default function Navbar() {
    return (
        <nav>
            <img src={reactLogo} className="nav-logo" />
            <h3 className="nav-logo-text">ReactFacts</h3>
            <h4 className="nav-title">My First React Web Page</h4>
        </nav>
    )
}