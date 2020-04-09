import React from 'react';

import './styles/banner.scss';

export default function Banner(props){

    var titleBanner = props.titleBanner;
    var messageBanner = props.messageBanner;

    return(
        <div className="banner">
            <div className="banner__image">
                
            </div>
            <div className="banner__title">
                <h1 className="banner__title-text">{titleBanner}</h1>
                <h2 className="banner__title-message">{messageBanner}</h2>
            </div>
        </div>
    )
}