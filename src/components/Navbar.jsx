import "./Navbar.css"
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <>
        <nav className="navbar">
            <div className="logo">MyCompany</div>

            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li>Home</li>
                <li>Features</li>
                <li>Contact</li>
            </ul>

            <button className="nav-btn desktop-only">Apply</button>

            {/* Hamburger */}
            <div
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </>
}