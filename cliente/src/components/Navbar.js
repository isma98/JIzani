import React from 'react';
import { Link } from 'react-router-dom';

import './styles/navbar.scss';

import logo from '../assets/images/logo.png';

export default function Navbar(){
    return(
        <div className="navbar">
        
            <div className="navbar__container-logo">
                <figure className="box-logo">
                    <img src={logo} alt="logo" />
                </figure>
            </div>

            <div className="navbar__container-menu">

                <input type="checkbox" id="chk-menu" />
                <input type="checkbox" id="chk-profile" />

                <label className="icon-profile" htmlFor="chk-profile">
                    <i className="icon fas fa-user"></i>
                </label>

                <label className="icon-menu" htmlFor="chk-menu">
                    <i className="icon fas fa-bars"></i>
                </label>

                <div className="container-profile">                
                    <label htmlFor="chk-profile">
                        <i className="icon close fas fa-times"></i>
                    </label>
                    <div className="menu-profile">
                        <ul className="menu__list">
                            <li className="menu__list-item">
                                <Link to="/login">cerrar sesión</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <nav className="container-menu">
                    <label htmlFor="chk-menu">
                        <i className="icon close fas fa-times"></i>
                    </label>
                    
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item">
                                <Link to="/">inicio</Link>
                            </li>
                            <li className="menu__list-item">
                                <Link to="/directorio">directorio</Link>
                            </li>
                            <li className="menu__list-item">
                                <Link to="/emision">emisión</Link>
                            </li>
                        </ul>
                    </nav>

                </nav>

            </div>

        </div>
    )
    
}