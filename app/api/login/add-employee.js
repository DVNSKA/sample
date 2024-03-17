// pages/api/employees.js

import connectDB from '../../lib/mongodb';
import EmployeeModel from '../../models/EmployeeModel';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectDB(); // Connect to MongoDB

      const { name, email, mobile, designation, gender, course } = req.body;
      const image = req.file.path; // Assuming the file path is sent in req.file

      const newEmployee = new EmployeeModel({
        name,
        email,
        mobile,
        designation,
        gender,
        course,
        image,
      });

      // Save the new employee document to the collection
      await newEmployee.save();

      res.status(201).json({ message: 'Employee added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
