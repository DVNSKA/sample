// components/EmployeeList.jsx

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employee data when the component mounts
    async function fetchData() {
      try {
        const response = await fetch('/api/login/employee');
        if (!response.ok) {
          throw new Error('Failed to fetch employee data');
        }
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error(error);
        // Handle error if fetch fails
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <p>Number of Employees: {employees.length}</p>

      {/* Button to navigate to create employee page */}
      <Link href="/create-employee">
        <a>Create Employee</a>
      </Link>

      {/* Display employee data in a table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
