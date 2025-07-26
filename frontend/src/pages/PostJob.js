// src/pages/PostJob.js
import React, { useState } from 'react';
import { postJob } from '../services/api';

function PostJob() {
  const [job, setJob] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    description: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation check
    if (!job.title || !job.company || !job.location || !job.salary || !job.description) {
      setMessage('⚠️ Please fill in all fields.');
      return;
    }

    try {
      await postJob(job);
      setMessage('✅ Job posted successfully!');
      setJob({ title: '', company: '', location: '', salary: '', description: '' });
    } catch (err) {
      console.error('Error posting job:', err);
      setMessage('❌ Failed to post job. Try again.');
    }
  };

  return (
    <div className="container">
      <h2 className="mb-3">Post a Job</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Job Title" value={job.title} onChange={handleChange} className="form-control mb-2" />
        <input type="text" name="company" placeholder="Company Name" value={job.company} onChange={handleChange} className="form-control mb-2" />
        <input type="text" name="location" placeholder="Location" value={job.location} onChange={handleChange} className="form-control mb-2" />
        <input type="text" name="salary" placeholder="Salary" value={job.salary} onChange={handleChange} className="form-control mb-2" />
        <textarea name="description" placeholder="Job Description" value={job.description} onChange={handleChange} className="form-control mb-2" />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default PostJob;
