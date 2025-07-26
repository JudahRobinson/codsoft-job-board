// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { fetchJobs } from '../services/api';

function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJobs()
      .then(res => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load jobs');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="text-primary">Available Jobs</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && jobs.length === 0 && <p>No jobs found.</p>}
      <div className="row">
        {jobs.map((job, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text"><strong>Company:</strong> {job.company}</p>
                <p className="card-text"><strong>Location:</strong> {job.location}</p>
                <p className="card-text"><strong>Salary:</strong> {job.salary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
