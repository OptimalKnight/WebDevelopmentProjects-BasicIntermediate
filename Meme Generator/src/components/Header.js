import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img src={require("../images/troll-face.png")} alt="#" className="header-img" />
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-rights">© All rights reserved</h4>
        </header>
    )
}