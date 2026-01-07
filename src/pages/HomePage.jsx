import React from 'react';
import HeroSlider from './Home';
import TextSlider from './Text_Slider';
import DepositesSchemes from  './DepositesSchemes';
import WeOffer from './WeOffer';
import AboutUs from './AboutUs';
import LookForward from './LookForward';



const HomePage = () => {
    return (
        <div className="min-h-screen">
            <HeroSlider />
            <TextSlider />
            <DepositesSchemes/>
            <WeOffer/>
            <AboutUs/>
            <LookForward/>
        </div>
    );
};

export default HomePage;