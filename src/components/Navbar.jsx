import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className="nav">
            <Link to='/' className="logo">Logo</Link>
            <ul className="list">
                <li>
                    <Link to='/' className="link">todos</Link>
                </li>
                <li>
                    <Link to='/posts' className="link">posts</Link>
                </li>
                <li>
                    <Link to='/users' className="link">users</Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar