import axios from "axios";

const API_BASE = process.env.REACT_APP_API || "http://localhost:5050/api";

console.log("API_BASE:", API_BASE); // For confirming in browser console

export const fetchJobs = () => axios.get(`${API_BASE}/jobs`);
export const postJob = (data) => axios.post(`${API_BASE}/jobs`, data);
