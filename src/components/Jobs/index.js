import React, {useState} from 'react';
import testJobs from '../../assets/js/jobs';

function Jobs () {

    const [jobStatus, setJobStatus] = useState();

    function updateStatus(e) {
        console.log(e.target.value);
    }

    return(
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h2 className="section-title glowing">Need to Apply</h2>
                        {testJobs.map((job) => (
                            (job.status === "need-apply" &&
                            <div key={job.name} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{job.name}</h5>
                                    <button className="btn btn-primary" value="applied" onClick={updateStatus}>Applied!</button>
                                </div>
                          </div>
                          )
                        ))}
                    </div>
                    <div className="col-12 col-md-4">
                        <h2 className="section-title glowing">Waiting for Response</h2>
                        {testJobs.map((job) => (
                            (job.status === "applied" &&
                            <div key={job.name} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{job.name}</h5>
                                    <button className="btn btn-primary" value="interview" onClick={updateStatus}>Interview Scheduled!</button>
                                </div>
                          </div>
                          )
                        ))}
                    </div>
                    <div className="col-12 col-md-4">
                        <h2 className="section-title glowing">Interview Scheduled</h2>
                        {testJobs.map((job) => (
                            (job.status === "interview" &&
                            <div key={job.name} className="card">
                                <div className="card-body">
                                     <h5 className="card-title">{job.name}</h5>
                                    <button className="btn btn-primary" value="interview-completed" onClick={updateStatus}>Interview Completed!</button>
                                </div>
                          </div>
                          )
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Jobs;