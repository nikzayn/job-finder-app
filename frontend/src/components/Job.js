import React from 'react';

const Job = ({job}) => {
    return (
        <div className="job">
            <h3>{job.title}</h3>
            <h3>{job.company}</h3>
        </div>
    );
};

export default Job;