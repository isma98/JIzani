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

                <label htmlFor="chk-profile">
                    <i className="icon fas fa-user"></i>
                </label>

                <label htmlFor="chk-menu">
                    <i className="icon fas fa-bars"></i>
                </label>

                <div className="container-profile">                
                    <label htmlFor="chk-profile">
                        <i className="icon close fas fa-times"></i>
                    </label>
                    <div className="menu-profile">
                        <ul className="menu__list">
                            <li className="menu__list-item">
                                <Link to="/perfil" >ver perfil</Link>
                            </li>
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
                    
                    <form className="box-search">
                        <input type="search" name="search" placeholder="Buscar..." />
                        <input type="submit" name="buscar" value="buscar" />
                    </form>

                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item">
                                <Link to="/">inicio</Link>
                            </li>
                            <li className="menu__list-item">
                                <Link to="/directorio">directorio</Link>
                            </li>
                            <li className="menu__list-item">
                                <Link to="/horario">horario</Link>
                            </li>
                            <li className="menu__list-item">
                                <Link to="/sinopsis">sinopsis</Link>
                            </li>
                            <li className="menu__list-item">
                                <Link to="/ver">ver</Link>
                            </li>
                        </ul>
                    </nav>

                </nav>

            </div>

        </div>
    )
    
}