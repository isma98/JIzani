import React from 'react';

import './styles/show.scss';

import Video from '../components/Video';
import Title from '../components/Title';
import Card from '../components/Card';

export default function Show(){
    return(
        <main className="content">
            <Video 
                titleVideo = {'Haikyuu capitulo 20'}
                srcVideo = {"https://storage.googleapis.com/delta-repeater-247102.appspot.com/ac506e54eb47f2088d1d27a094a817e2.mp4?rnd=783099558"}
            />  
            <Title 
                title = {'Te puede gustar..'}
            />
            <div className="container-series">
                <Card 
                    titleCard = {'Anohana'}
                />
                <Card 
                    titleCard = {'Anohana'}
                />
                <Card 
                    titleCard = {'Anohana'}
                />
                <Card 
                    titleCard = {'Anohana'}
                />
                <Card 
                    titleCard = {'Anohana'}
                />                
            </div>
          
        </main>
    )

}