import React from 'react';

import './styles/directory.scss';

import Title from '../components/Title';
import Card from '../components/Card';

export default function Directory(){
    return(
        <main className="content">
            <Title title={'¿Qué puedo ver ahora?'}  />

            <form className="box-search">
                <input className="search" type="search" name="search" placeholder="Buscar..." />
                <input className="btn" type="submit" name="buscar" value="buscar" />
            </form>

            <div className="container-series">
                <Card titleCard="Kimi ni todoke"/>
            </div>
        </main>
    )
}