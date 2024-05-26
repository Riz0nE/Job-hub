import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobDetail from '../JobDetail/JobDetail';

const JobDetails = () => {
    const jobs = useLoaderData();




    return (
        <div>
            {
                jobs.map(job => <JobDetail
                    key={job.id}
                    job={job}
                ></JobDetail>)
            }

        </div>

    );
};

export default JobDetails;