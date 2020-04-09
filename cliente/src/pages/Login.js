import React from 'react';

import imgLogo from '../assets/images/logo.png';

export default function Login(){
    return(
        <div className="container">
            <figure>
                <img src={imgLogo} alt="logo" />
            </figure>
        </div>
    )
}