import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <header>
      <div className="fluid-container">
          <div class="navbar-hamburger-icon">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
          <div className="col-4 logo">
            <Link to="/"><img src="images/logo.png" alt="Logo" /></Link>
          </div>
          <div className='basket'>
                <img src='images/basket.svg' alt='order basket' />
          </div>
          <div className="navbar">
            <nav>
              <div className="navbar-menu">
                <ul className="">
                  <li><Link to="/">Home</Link></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Menu</a></li>
                  <li><a href="#">Reservations</a></li>
                  <li><a href="#">Order Online</a></li>
                  <li><a href="#">Login</a></li>
                </ul>
              </div>
            </nav>
          </div>
      </div>
    </header>
  )
}

export default Header;