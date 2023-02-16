import React from 'react';
import "./navBar.css";


const NavBar = () => {
    return (
        <div className='nav'>
            <h1>LOGO</h1>
            <ul>
                <li><a href='#'>MUJERES</a></li>
                <li><a href='#'>HOMBRES</a></li>
                <li><a href='#'>NIÑOS</a></li>
                <i><a href='#'>CARRITO</a></i>
            </ul>
        </div>
    );
};

export default NavBar;