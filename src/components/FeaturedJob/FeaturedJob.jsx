import React from 'react';
import Jobs from '../Jobs/Jobs';

const FeaturedJob = () => {
    return (
        <div>
            <section className='featured-job'>
                <div className='catagory'>
                    <h1>Featured Jobs</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <Jobs></Jobs>

            </section>
        </div>
    );
};

export default FeaturedJob;