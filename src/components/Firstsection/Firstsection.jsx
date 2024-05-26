import React from 'react';
import './Firstsection.css'
const Firstsection = () => {
    return (
        <div>
            <div className='header-section'>
                <div className='header-info'>
                    <h1>One Step</h1>
                    <h1>Closer To Your</h1>
                    <h1 className='dream'>Dream Job</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-start'>Get Started</button>
                </div>
                <div className='header-img'>
                    <img src="../../../images/pic1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Firstsection;