import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div class = "Title">Paying Guest Booking Management</div>
            {/* <p>
                <NavLink to="/" activeClassName = "is-active" exact={true}>Home </NavLink>
                <NavLink to="/portfolio" activeClassName = "is-active">Portfolio </NavLink>
                <NavLink to="/contactUs" activeClassName = "is-active">Contact Us </NavLink>
            </p> */}
            
        </header>
    );
};

export default Header;