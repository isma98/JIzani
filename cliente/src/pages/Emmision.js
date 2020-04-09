import React from 'react';

import './styles/emmision.scss';

import Banner from '../components/Banner';
import Title from '../components/Title';
import Card from '../components/Card';

export default class Emmision extends React.Component{
    render(){
        return(
            <main className="content">
                <Banner 
                    titleBanner = {'Primavera 2020'}
                    messageBanner = {'Abril Mayo Junio'}
                />
                <Title 
                    title = {'Lunes'}
                />
                <div className="container-series">
                    <Card 
                        titleCard = {'Another'}
                    />
                </div>
                
                <Title 
                    title = {'Martes'}
                />
                
                <div className="container-series">
                    <Card 
                        titleCard = {'Another'}
                    />
                </div>

                <Title 
                    title = {'Miercoles'}
                />
                
                <div className="container-series">
                    <Card 
                        titleCard = {'Another'}
                    />
                </div>

                <Title 
                    title = {'Jueves'}
                />
                
                <div className="container-series">
                    <Card 
                        titleCard = {'Another'}
                    />
                </div>

                <Title 
                    title = {'Viernes'}
                />
                
                <div className="container-series">
                    <Card 
                        titleCard = {'Another'}
                    />
                </div>

                <Title 
                    title = {'Sabado'}
                />
                
                <div className="container-series">
                    <Card 
                        titleCard = {'Another'}
                    />
                </div>

                <Title 
                    title = {'Domingo'}
                />

                <div className="container-series">
                    <Card 
                        titleCard = {'Another'}
                    />
                </div>
            </main>
        )
    }
}