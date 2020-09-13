import React, {useState, useEffect } from 'react';
import testJobs from '../../assets/js/jobs';

function Jobs () {

    const [jobStatus, setJobStatus] = useState();

    function updateStatus(e) {
        const jobName = e.target.id;
        let currentJob = testJobs.find(job => job.name === jobName);
        if (currentJob.status === "need-apply") {
            currentJob.status = "applied";
        } else if (currentJob.status === "applied") {
            currentJob.status = "interview"
        } else {
            currentJob.status ="complete"
        }
        console.log(currentJob);

        // PUT find current job in db and update status to next status level


    }

    function createButton (status, jobName) {
        switch (status) {
            case "applied":
                return <button
                id={jobName}
                className="btn btn-primary"
                value={status}
                onClick={updateStatus}>
                        Interview Scheduled!
                        </button>;
            case "interview":
                return <button
                id={jobName}
                className="btn btn-primary"
                value={status}
                onClick={updateStatus}>
                    interview Complete!
                    </button>;
            default:
                return <button
                id={jobName}
                className="btn btn-primary"
                value={status}
                onClick={updateStatus}>
                    Applied!
                    </button>;
            
        }
    }

    function sortJobs (status, jobs) {
        console.log(jobs)
        return jobs.map((job) => (
            (job.status === status &&
                <div key={job.name} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{job.name}</h5>
                        {createButton(status, job.name)}
                    </div>
                </div>
            )
        ))
    }

    function buildCards () {
        return (
            <div className="row">
                <div className="col-12 col-md-4 align-self-center">
                    <h2 className="section-title glowing">Need to Apply</h2>
                    {sortJobs("need-apply", testJobs)}
                </div>
                <div className="col-12 col-md-4">
                    <h2 className="section-title glowing">Waiting for Response</h2>
                    {sortJobs("applied", testJobs)}
                </div>
                <div className="col-12 col-md-4">
                    <h2 className="section-title glowing">Interview Scheduled</h2>
                    {sortJobs("interview", testJobs)}
                </div>
            </div>
        );
    }

    function clearCards () {
        return (
            <div className="row">
            </div>
        );
    }

    return(
        <section className="bottom-border fill-screen">
            <div className="container-fluid">
                {clearCards()}
                {buildCards()}
            </div>
        </section>
    )
}

export default Jobs;