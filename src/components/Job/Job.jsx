import React from 'react';
import './Job.css'
import { Link, useNavigate } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, location, job_type, salary, remote_or_onsite } = job;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/jobs/${id}`)
    }
    return (
        <div className='job-container'>

            <img src={logo} alt="" />

            <h5>{job_title}</h5>
            <p>{company_name}</p>
            <p>{job_type} {remote_or_onsite}</p>
            <p>{location} Salary :{salary}</p>
            <button onClick={handleNavigate} className='btn-start'>View Details</button>
        </div >
    );
};

export default Job;