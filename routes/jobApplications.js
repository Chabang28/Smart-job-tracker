import express from 'express';
import JobApplication from '../models/JobApplication.js';

const router = express.Router();

// Get all job applications
router.get('/', async (req, res) => {
  try {
    const applications = await JobApplication.find();
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new job application
router.post('/', async (req, res) => {
  const { name, email, resumeLink, jobTitle } = req.body;

  const newApplication = new JobApplication({
    name,
    email,
    resumeLink,
    jobTitle,
  });

  try {
    const savedApplication = await newApplication.save();
    res.status(201).json(savedApplication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
