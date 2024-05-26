import React from 'react';

const JobDetail = ({ job }) => {
    const { id, logo, job_title, company_name, location, job_type, salary, remote_or_onsite, job_description,
        job_responsibility, educational_requirements, experiences, contact_information
    } = job;
    return (
        <div>
            <img src={logo} alt="" />
            <h5>{job_title}</h5>
            <p>{company_name}</p>
            <p>{job_type} {remote_or_onsite}</p>
            <p>{location} Salary :{salary}</p>
            <p>Job Description :{job_description}</p>
            <p>Job Responsibility :{job_responsibility}</p>
            <p>Education Requirement :{educational_requirements}</p>
            <p>Experience :{experiences}</p>
            {/* <p>Contact Info :{contact_information.phone}</p>
            <p>Contact Info :{contact_information.email}</p>
            <p>Contact Info :{contact_information.address}</p> */}

        </div>
    );
};

export default JobDetail;