import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                <div className='banner item1 text-center py-5'>
                    <h1 className='banner-title'>Amazing Tour In Indonesia</h1>
                    <p className='banner-des'>7 Days, 8 Night Tour </p>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                   <div className="banner item2  text-center py-5">
                   <h3 className='banner-title'>Amazing Tour In madagascar </h3>
                   <p className='banner-des'>10 Days, 11 Night Tour </p>
                   </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="banner item3  text-center py-5">
                    <h3 className='banner-title'>Amazing Tour In Hampshire </h3>
                    <p className='banner-des'>4 Days, 5 Night Tour </p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;