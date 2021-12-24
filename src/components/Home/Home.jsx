import React from 'react';
import HomeBlog from '../Blog/HomeBlog/HomeBlog';
import HomeContact from '../Contact/HomeContact/HomeContact';
import HeroSection from '../Hero/HeroSection';
import HomePortfolio from '../Portfolio/HomePortfolio/HomePortfolio';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <HomePortfolio></HomePortfolio>
            <HomeBlog></HomeBlog>
            <HomeContact></HomeContact>
           
        </div>
    );
};

export default Home;