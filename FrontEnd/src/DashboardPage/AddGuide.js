import React, { useState } from "react";
import Axios from 'axios';
import { AiOutlinePlus } from "react-icons/ai";
import HeaderDash from "./HeaderDashboard/HeaderDash";
import { useNavigate } from 'react-router-dom';
import "./Dashboard.css";

const AddGuide = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    phone: '',
    email: '',
    role: '',
    image: null
  });

  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'image' ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('name', formData.name);
    form.append('gender', formData.gender);
    form.append('phone', formData.phone);
    form.append('email', formData.email);
    form.append('role', formData.role);
    if (formData.image) {
      form.append('image', formData.image);
    }

    try {
      await Axios.post('http://localhost:8000/api/guides', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate('/guides'); // Redirect to /guides on success
    } catch (error) {
      console.error('Error adding guide:', error.response?.data?.message || error.message);
    }
  };

  return (
    <>
      <HeaderDash />
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="sectionTitle">
              <h1 className="mb-4 fw-bold">Add New Guide!</h1>
              <p>Add new guide for the world!</p>
            </div>

            <form onSubmit={handleSubmit} className="formDiv">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="image" className="form-label">Insert Image</label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="name" className="form-label">Guide Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter guide's full name"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="gender" className="form-label">Gender</label>
                  <input
                    type="text"
                    id="gender"
                    name="gender"
                    className="form-control"
                    placeholder="Gender"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="phone" className="form-label">Guide Contact Number</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Enter guide's phone number"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">Guide Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter guide's email"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="role" className="form-label">Guide Role</label>
                  <select
                    id="role"
                    name="role"
                    className="form-control"
                    onChange={handleChange}
                  >
                    <option value="">Select role</option>
                    <option value="Tour Guide 1">Tour Guide 1</option>
                    <option value="Tour Guide 2">Tour Guide 2</option>
                    <option value="Administrator">Administrator</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-primary d-flex align-items-center">
                Add Guide <AiOutlinePlus className="ms-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddGuide;
