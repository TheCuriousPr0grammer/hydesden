import React from 'react'
import "./Navbar.scss";
import logo from "./Logoz.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__img">
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="navbar__links">
        <a href="/about">
          Despre noi
        </a>
        <a href="/categories">
          Categorii
        </a>
        <a href="/contact">
          Contact
        </a>
      </div>
      <div className="navbar__user">
        {/* User icon button  with name of user */}
          User info + cart
      </div>
    </div>
  )
}

export default Navbar