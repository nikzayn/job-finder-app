import React from 'react';
import Typography from '@material-ui/core/Typography';

import Job from './Job';

const Jobs = ({ jobs }) => {
    return (
        <div className="job-list">
            <Typography variant="h1">
                Entry Level Software Jobs
            </Typography>
            {jobs.map(job => <Job job={job} />)}
        </div>
    );
};

export default Jobs;