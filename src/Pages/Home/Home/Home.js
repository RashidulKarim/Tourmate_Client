import React from 'react';
import Banner from '../Banner/Banner';
import Newslater from '../Newslater/Newslater';
import Packages from '../Packages/Packages';
import Reviews from '../Reviews/Reviews';
import WhyTourmate from '../WhyTourmate/WhyTourmate';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <WhyTourmate></WhyTourmate>
            <Reviews></Reviews>
            <Newslater></Newslater>
        </div>
    );
};

export default Home;