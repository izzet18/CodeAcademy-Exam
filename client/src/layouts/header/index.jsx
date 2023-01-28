import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"


const Header = () => {
  return (
    <div id='header'>
        <div className="container">
            <div className="logo">
                <Link to={'/'}><h2>Nitro</h2></Link>
            </div>
            <nav>
                <ul>
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'#'}><li>About</li></Link>
                    <Link to={'#'}><li>Portfoli</li></Link>
                    <Link to={'#'}> <li>Services</li></Link>
                    <Link to={'#'}><li>Blog</li></Link>
                    <Link to={'#'}><li>Contact</li></Link>
                    <Link to={'/add-services'}><li>Add Service</li></Link>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header