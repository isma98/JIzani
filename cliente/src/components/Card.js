import React from 'react';
import { Link } from 'react-router-dom';

import './styles/card.scss';

import img from '../assets/images/Haikyuu.jpg';

export default function Card(props){

    var titleCard = props.titleCard ;

    return(
        <div className="box">
			<Link className="box__link" to="/sinopsis">
				<img className="box__link-image" src={img} alt="imagen-capitulo" />
				<span>{titleCard}</span>
			</Link>
		</div>
    )
}