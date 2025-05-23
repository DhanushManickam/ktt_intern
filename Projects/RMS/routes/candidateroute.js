const express    = require('express');
const candidates = require('../models/candidatemodel');
const router     = express.Router();

router.post('/add_candidate', async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email_id,
      contact_no,
      qualification,
      location,
      resume,
      gitlink,
      source,
      emp_id,
      role,
      company,
      designation,
      experience,
      notice_period,
      sal_type,
      current_salary,
      expected_salary,
      basic
    } = req.body;

    let skill_set = [];
    try {
      skill_set = basic ? JSON.parse(basic) : [];
    } catch (e) {
      skill_set = [];
    }

    const parsedEmpId = emp_id && !isNaN(emp_id) ? parseInt(emp_id, 10) : null;
    const parsedExperience= experience && !isNaN(experience) ? parseFloat(experience): null;
    const parsedNoticePeriod= notice_period && !isNaN(Date.parse(notice_period)) ? new Date(notice_period): null;
    const parsedCurrentSalary = current_salary && !isNaN(current_salary)? parseInt(current_salary, 10): null;
    const parsedExpectedSalary = expected_salary && !isNaN(expected_salary)? parseInt(expected_salary, 10): null;
    const maxId = await candidates.max('candidate_id');
    const newId = maxId ? maxId + 1 : 1;

    await candidates.create({
      candidate_id:   newId,
      first_name,
      last_name,
      email_id,
      contact_no,
      qualification:  qualification || null,
      location:  location || null,
      resume,
      gitlink: gitlink || null,
      source,
      emp_id: parsedEmpId,
      role: role || null,
      company: company || null,
      designation:  designation || null,
      experience: parsedExperience,
      notice_period:  parsedNoticePeriod,
      sal_type: sal_type || null,
      current_salary: parsedCurrentSalary,
      expected_salary:parsedExpectedSalary,
      skill_set
    });

    console.log(`Candidate #${newId} add successfully`);
    return res.redirect('/candidate');
  }
  catch (err) {
    console.error('Error creating candidate:', err);
    return res
      .status(500).json({ error: 'Candidate not created', details: err.message || err });
  }
});

router.get('/api/candidates', async (req, res) => {
  try {
    const Candidates = await candidates.findAll();

    if (Candidates.length === 0) {
      return res.status(404).json({ message: 'No candidates found' });
    }

    res.json(Candidates);
  } catch (err) {
    console.error('Error fetching candidates:', err);
    res.status(500).send('Server Error');
  }
});

router.get('/api/candidates/:id', async (req, res) => {
  try {
    const candidateId = req.params.id;
    const candidate = await candidates.findOne({
      where: { candidate_id: candidateId }
    });
    
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }
    res.json(candidate);
  } catch (err) {
    console.error('Error fetching candidate:', err);
    res.status(500).send('Server Error');
  }
});

router.put('/api/candidates/:id', async (req, res) => {
  try {
    const candidateId = req.params.id;
    const {
      first_name,
      last_name,
      email_id,
      contact_no,
      qualification,
      location,
      role,
      experience,
      notice_period,
      current_salary,
      expected_salary,
    } = req.body;

    const candidate = await candidates.findOne({
      where: { candidate_id: candidateId }
    });

    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    await candidate.update({
      first_name,
      last_name,
      email_id,
      contact_no,
      qualification,
      location,
      role,
      experience,
      notice_period,
      current_salary,
      expected_salary,
    });

    res.json({ message: 'Candidate updated successfully', candidate });
  } catch (err) {
    console.error('Error updating candidate:', err);
    res.status(500).send('Server Error');
  }
});


module.exports = router;