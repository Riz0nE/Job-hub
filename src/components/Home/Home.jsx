import React from 'react';
import { Outlet } from 'react-router-dom';
import './Home.css'
import Firstsection from '../Firstsection/Firstsection';
import Jobcatagorylist from '../Jobcatagorylist/Jobcatagorylist';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const Home = () => {
    return (
        <div>
            <Firstsection></Firstsection>
            <Jobcatagorylist></Jobcatagorylist>
            <FeaturedJob></FeaturedJob>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;