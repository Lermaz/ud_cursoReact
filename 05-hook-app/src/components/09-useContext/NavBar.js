import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">useContext</Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink to="/" exact activeClassName="active" className="nav-item nav-link">Home</NavLink>
          <NavLink to="/about" exact activeClassName="active" className="nav-item nav-link">About</NavLink>
          <NavLink to="/login" exact activeClassName="active" className="nav-item nav-link">Login</NavLink>
        </div>
      </div>
    </nav>
  )
}
