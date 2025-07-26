const mongoose = require('mongoose');

// Define schema for a job post
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true // Title is mandatory
  },
  description: {
    type: String,
    default: '' // Optional, defaults to empty string
  },
  location: {
    type: String,
    default: '' // Optional, defaults to empty string
  }
});

// Export the model
module.exports = mongoose.model('Job', jobSchema);
