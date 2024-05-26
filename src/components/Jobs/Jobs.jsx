import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';
import './Jobs.css'

const Jobs = () => {
    const jobs = useLoaderData();





    return (
        <div>

            <div className='jobs-section'>
                <div className='jobs-container'>
                    {
                        jobs.slice(0, 4).map(job => <Job
                            key={job.id}
                            job={job}
                        ></Job>)
                    }

                </div>




            </div>
            <button className='btn-see-all'>See All Jobs</button>
        </div>

    );
};

export default Jobs;