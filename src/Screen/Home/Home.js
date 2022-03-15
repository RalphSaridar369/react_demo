import React, { useContext, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { MainContext } from '../../MainContext';
import './style.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { carouselData } from '../../mockData';
import Flatlist from './components/Flatlist';

const Home = () => {
    const [state, dispatch] = useContext(MainContext)

    return (
        <div className='main'>
            <div className="main__carousel">
                <Carousel autoPlay interval={5000} infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} >
                    {carouselData.map((item, index) => {
                        return <div key={index}>
                            <img src={item.image} style={{ width: '50%' }} />
                        </div>
                    })}
                </Carousel>
            </div>
            <Flatlist title="Top Products"/>
            <Flatlist title="Top Selling"/>
            <Flatlist title="Best Consoles"/>
        </div>
    )
}

export default Home
