// pages/api/login/employee.js

import connect from '../../../lib/mongodb';
import EmployeeModel from '../../../models/EmployeeModel';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await connect(); // Connect to MongoDB

      // Fetch all employees from the database
      const employees = await EmployeeModel.find();

      res.status(200).json(employees);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
