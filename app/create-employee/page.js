// components/CreateEmployeeForm.jsx

import React, { useState } from 'react';

const CreateEmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    course: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('mobile', formData.mobile);
    formDataToSend.append('designation', formData.designation);
    formDataToSend.append('gender', formData.gender);
    formDataToSend.append('course', formData.course);
    formDataToSend.append('image', formData.image);

    try {
      const response = await fetch('/api/add-employee', {
        method: 'POST',
        body: formDataToSend,
      });
      if (!response.ok) {
        throw new Error('Failed to add employee');
      }
      // Reset form data after successful submission
      setFormData({
        name: '',
        email: '',
        mobile: '',
        designation: '',
        gender: '',
        course: '',
        image: null,
      });
      alert('Employee added successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to add employee');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile" />
      <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation" />
      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input type="text" name="course" value={formData.course} onChange={handleChange} placeholder="Course" />
      <input type="file" name="image" onChange={handleFileChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateEmployeeForm;
