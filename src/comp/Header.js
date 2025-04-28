import React from 'react';

const Header = () => {
  return(
    <header>
      <div className="fluid-container">
          <div className="col-6 logo">
            <Link to="/"><img src="images/logo.png" alt="Logo" /></Link>
          </div>
          <div className="col-6">
            <nav>
              <div className="nav-bar">
                <ul>
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