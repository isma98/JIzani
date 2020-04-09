import React from 'react';

import './styles/home.scss';

import Banner from '../components/Banner';
import Card from '../components/Card';
import SmallCard from '../components/SmallCard';
import Title from '../components/Title';

export default function Home() {
        return(
            <main className="content">

                <Banner 
                    titleBanner = {'JizAni'}
                    messageBanner = {'El mejor contenido Anime'}
                />

                <Title title={'Nuevos Capitulos'} />
                <div className="container-chapter">
                    <SmallCard 
                        titleChapter = {'Haikyuu'}
                        episode = {'20'}
                    />
                    <SmallCard 
                        titleChapter = {'Haikyuu'}
                        episode = {'20'}
                    />
                    <SmallCard 
                        titleChapter = {'Haikyuu'}
                        episode = {'20'}
                    />
                    <SmallCard 
                        titleChapter = {'Haikyuu'}
                        episode = {'20'}
                    />
                    <SmallCard 
                        titleChapter = {'Haikyuu'}
                        episode = {'20'}
                    />
                    <SmallCard 
                        titleChapter = {'Haikyuu'}
                        episode = {'20'}
                    />
                    <SmallCard 
                        titleChapter = {'Haikyuu'}
                        episode = {'20'}
                    />
                    <SmallCard 
                        titleChapter = {'Haikyuu'}
                        episode = {'20'}
                    />                    
                </div>     
                
                <Title title={'Animes'} />

                <div className="container-series">
                    <Card 
                        titleCard = {'Haikyuu'}
                    />
                     <Card 
                        titleCard = {'Haikyuu'}
                    />
                     <Card 
                        titleCard = {'Haikyuu'}
                    />
                     <Card 
                        titleCard = {'Haikyuu'}
                    />
                    <Card 
                        titleCard = {'Haikyuu'}
                    />
                     <Card 
                        titleCard = {'Haikyuu'}
                    />
                     <Card 
                        titleCard = {'Haikyuu'}
                    />
                     <Card 
                        titleCard = {'Haikyuu'}
                    />
                </div> 
            </main>
        )
    
}
