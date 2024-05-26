import React from 'react';
import { CalculatorIcon, LightBulbIcon, ComputerDesktopIcon, BoltIcon } from '@heroicons/react/24/solid'
import './Jobcatagorylist.css'
const Jobcatagorylist = () => {
    return (
        <div>
            <div className='job-catagory'>
                <div className='catagory'>
                    <h1>Job Catagory Lists</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='job-lists'>
                    <div className='account'>
                        <CalculatorIcon className="text-blue-500 icon" />
                        <h4>Account & Finance</h4>
                        <p>300+ job available</p>
                    </div>
                    <div className='account'>
                        <LightBulbIcon className="text-blue-500 icon" />
                        <h4>Creative Design</h4>
                        <p>100+ job available</p>
                    </div>
                    <div className='account'>
                        <ComputerDesktopIcon className="text-blue-500 icon" />
                        <h4>Marketing & Sales</h4>
                        <p>200+ job available</p>
                    </div>
                    <div className='account'>
                        <BoltIcon className="text-blue-500 icon" />
                        <h4>Engineering Job</h4>
                        <p>100+ job available</p>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default Jobcatagorylist;