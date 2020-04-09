import React from 'react';

import './styles/title.scss';

export default function Title(props){

    var title = props.title;

    return(
        <div className="box-title">
            <h4 className="box-title__message">
                {title}
            </h4>
        </div>
    )
}
