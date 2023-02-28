import React from 'react'
import "./navbar.css"
const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navContainer">
                    <span className="logo">KOKAND</span>
                    <div className="navItem">
                        <button className="navButton">Register</button>
                        <button className="navButton">Login</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar