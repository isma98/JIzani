import React from 'react';
import { Link } from 'react-router-dom';

import './styles/small-card.scss';

import imgChapter from '../assets/images/caratula_3.png'

export default function SmallCard(props){

    var titleChapter = props.titleChapter;
    var episode = props.episode;

    return(
        <div className="chapter">
            <Link className="chapter__link" to="/ver">
                <img className="chapter__link-image" src={imgChapter} alt="imagen-capitulo" />
                <span className="chapter__link-title">{titleChapter}</span>
                <span className="chapter__link-episode">{episode}</span>
            </Link>
        </div>
    )
}