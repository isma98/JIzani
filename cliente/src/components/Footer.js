import React from 'react';

import './styles/footer.scss';

export default function Footer(){
    return(
        <div className="container-footer">
            <div className="container-footer__left">
                <small>Derechos Reservados ©</small>
            </div>
            <div className="container-footer__right">
                <a href="/" target="__blank">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="/" target="__blank">
                    <i className="fab fa-facebook"></i>
                </a>
            </div>	
        </div>
    )
}