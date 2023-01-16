import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import App1 from './App1'

export default function Navbar() {
    return (
        <>
            <nav className='text-white'>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <Outlet />
        </>
    )
}
