import React from 'react';

import Navbar from './Navbar';

import './styles/layout.scss';

export default function Layout(props){
    return(
        <React.Fragment>
            <header className="header">
                <Navbar />
            </header>
            {props.children}
            <footer className="footer">

            </footer>
        </React.Fragment>
    )
}