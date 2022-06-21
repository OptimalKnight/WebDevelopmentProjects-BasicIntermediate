import React from "react"
import airbnbLogo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={airbnbLogo} className="navbar-logo" />
        </nav>
    )
}