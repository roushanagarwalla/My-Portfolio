import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
    const [mode, setMode] = useState("dark")

    const toggleMode = () => {
        if (mode === "dark") {
            setMode("light")
            document.body.setAttribute("color-mode", "light")
        } else {
            setMode("dark")
            document.body.setAttribute("color-mode", "dark")
        }
    }

    return (
        <header className="navbar p-3">
            <div className="container-fluid justify-content-center">
                <div className="d-flex">
                    <ul className="d-flex navbar-nav ms-4 ms-auto me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-1">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item mx-1">
                            <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item mx-1">
                            <NavLink className={`${({ isActive }) => isActive ? "active" : ""} nav-link`} aria-current="page" to="/skills" end>Skills</NavLink>
                        </li>
                        <li className="nav-item mx-1">
                            <NavLink className={`${({ isActive }) => isActive ? "active" : ""} nav-link`} aria-current="page" to="/projects" end>Projects</NavLink>
                        </li>
                    </ul>
                    <div onClick={toggleMode} className="m-2">
                        <i className={`h3 hand mx-2 mt-2 bi ${mode === "dark" ? "text-warning bi-sun-fill" : "bi-moon-stars-fill primary-text h4"}`}></i>
                    </div>
                </div>
            </div>
        </header>
    )
}
