import React from 'react';
import Nevigation from '../../Shared/Nevigation/Nevigation';
import Banner from '../Banner/Banner';
import WeddingPackages from '../WeddingPackages/WeddingPackages';



const Home = () => {
    return (
        <div>
           <Nevigation></Nevigation>
           <Banner></Banner>
           <WeddingPackages></WeddingPackages>

        </div>
    );
};

export default Home;