import React, {useState, useEffect } from 'react';
const testJobs = [
    {
        name: "Walmart",
        status: "applied"
    },
    {
        name: "Apple",
        status: "applied"
    },
    {
        name: "Target",
        status: "need-apply"
    },
    {
        name: "Smith's",
        status: "need-apply"
    },
    {
        name: "Burger King",
        status: "interview"
    },
    {
        name: "Sewage Plant",
        status: "interview"
    },
]

function Jobs () {


    const [jobStatus, setJobStatus] = useState(testJobs);

    // useEffect - onRender make call to db, then setState with jobs array

    function updateStatus(e) {
        const jobName = e.target.id;
        let currentJob = jobStatus.find(job => job.name === jobName);
        if (currentJob.status === "need-apply") {
            currentJob.status = "applied";
        } else if (currentJob.status === "applied") {
            currentJob.status = "interview"
        } else {
            currentJob.status ="complete"
        }
        const newJobs = jobStatus;
        console.log(newJobs);
        setJobStatus(newJobs);

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
                    {sortJobs("need-apply", jobStatus)}
                </div>
                <div className="col-12 col-md-4">
                    <h2 className="section-title glowing">Waiting for Response</h2>
                    {sortJobs("applied", jobStatus)}
                </div>
                <div className="col-12 col-md-4">
                    <h2 className="section-title glowing">Interview Scheduled</h2>
                    {sortJobs("interview", jobStatus)}
                </div>
            </div>
        );
    }

    return(
        <section className="bottom-border fill-screen">
            <div className="container-fluid">
                {buildCards()}
            </div>
        </section>
    )
}

export default Jobs;