import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className='col-3'>
                    <img src="images/logo1.png" alt="Logo" />
                </div>
                <div className="col-3">
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
                <div className="col-3">
                    <h6>Contact</h6>
                    <ul>
                        <li>Adress</li>
                        <li>Phone number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div className="col-3">
                    <h6>Social Media Links</h6>
                    <ul>
                        <i class="fa fa-facebook-square fa-lg" aria-hidden="true"></i><br/>
                        <i class="fa fa-telegram fa-lg" aria-hidden="true"></i><br/>
                        <i class="fa fa-twitter fa-lg" aria-hidden="true"></i>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;