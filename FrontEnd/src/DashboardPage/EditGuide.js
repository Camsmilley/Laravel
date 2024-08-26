import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import HeaderDash from "./HeaderDashboard/HeaderDash";

const EditGuide = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    phone: '',
    email: '',
    role: '',
    image: null
  });

  useEffect(() => {
    const fetchGuide = async () => {
      try {
        const response = await Axios.get(`http://localhost:8000/api/guides/${id}`);
        setFormData({
          name: response.data.name,
          gender: response.data.gender,
          phone: response.data.phone,
          email: response.data.email,
          role: response.data.role,
          image: null
        });
      } catch (error) {
        console.error('Error fetching guide:', error);
      }
    };

    fetchGuide();
  }, [id]);

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
    form.append('_method', 'PUT'); // Use PUT method for updating
    form.append('name', formData.name);
    form.append('gender', formData.gender);
    form.append('phone', formData.phone);
    form.append('email', formData.email);
    form.append('role', formData.role);
    if (formData.image) {
      form.append('image', formData.image);
    }

    try {
      await Axios.post(`http://localhost:8000/api/guides/${id}`, form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate('/guides'); // Redirect to guides list
    } catch (error) {
      console.error('Error updating guide:', error);
    }
  };

  return (
    <>
      <HeaderDash />
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4 fw-bold">Edit Guide Page!</h1>
            <p className="mb-4">Edit this guide's details</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label htmlFor="image" className="form-label">Insert Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Guide Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Enter guide's full name"
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="gender" className="form-label">Gender</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              placeholder="Gender"
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Guide Contact Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              placeholder="Enter guide's phone number"
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Guide Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter guide's email"
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="role" className="form-label">Guide Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Select role</option>
              <option value="Tour Guide 1">Tour Guide 1</option>
              <option value="Tour Guide 2">Tour Guide 2</option>
              <option value="Administrator">Administrator</option>
            </select>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Update Guide <AiOutlinePlus className="icon" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditGuide;
