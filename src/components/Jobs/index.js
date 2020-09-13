import React from 'react';
import testJobs from '../../assets/js/jobs';

function Jobs () {

    return(
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h2>Need to Apply</h2>
                        {testJobs.map((job) => (
                            (job.status === "need-apply" &&
                            <h3>{job.name}</h3>)
                        ))}
                    </div>
                    <div className="col-12 col-md-4">
                        <h2>Waiting for Response</h2>
                        {testJobs.map((job) => (
                            (job.status === "applied" &&
                            <h3>{job.name}</h3>)
                        ))}
                    </div>
                    <div className="col-12 col-md-4">
                        <h2>Interview Scheduled</h2>
                        {testJobs.map((job) => (
                            (job.status === "interview" &&
                            <h3>{job.name}</h3>)
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Jobs;