import React from 'react';

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="col-4">
                    <img src="images/logo.png" alt="Logo" />
                    <h6>Doormat Navigation</h6>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
                <div className="col-4">
                    <h6>Contact</h6>
                    <ul>
                        <li>Adress</li>
                        <li>Phone number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h6>Social Media Links</h6>
                    <ul>
                        <li>Adress</li>
                        <li>Phone number</li>
                        <li>Email</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;