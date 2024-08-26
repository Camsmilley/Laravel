import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";
import HeaderDash from './HeaderDashboard/HeaderDash';

const Add = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    min_guests: '',
    time_estimate: '',
    location: '',
    price: '',
    image: null,
    description: '',
    inclusions: '',
    exclusions: '',
    additional_info: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
        data.append(key, formData[key]);
    }

    try {
        const response = await Axios.post('http://localhost:8000/api/safaris', data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });

        // Ensure response.data.image exists
        const imageUrl = response.data.image;
        if (imageUrl) {
            const imageName = imageUrl.split('/').pop();
            // Uncomment if needed to save image locally
            // saveAs(imageUrl, `src/assets/${imageName}`);
        } else {
            console.error('Image URL is not returned from the server');
        }

        navigate('/tourpage');
    } catch (error) {
        console.error('Error adding safari:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      <HeaderDash />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="sectionTitle">
              <h1 className="mb-4 fw-bold">Add New Treks Safari</h1>
              <p className="mb-4">Add new experience for the world!</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" name="title" onChange={handleChange} placeholder="Enter title" className="form-control" required />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="min_guests" className="form-label">Minimum Guests</label>
              <input type="number" name="min_guests" onChange={handleChange} placeholder="Enter minimum guests" className="form-control" required />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="time_estimate" className="form-label">Time Estimate</label>
              <input type="text" name="time_estimate" onChange={handleChange} placeholder="Enter time estimate" className="form-control" required />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="location" className="form-label">Location</label>
              <input type="text" name="location" onChange={handleChange} placeholder="Enter location" className="form-control" required />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="price" className="form-label">Price</label>
              <input type="text" name="price" onChange={handleChange} placeholder="Enter price" className="form-control" required />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="image" className="form-label">Image</label>
              <input type="file" name="image" onChange={handleChange} className="form-control" required />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea name="description" onChange={handleChange} placeholder="Enter description" className="form-control"></textarea>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="inclusions" className="form-label">Inclusions</label>
              <textarea name="inclusions" onChange={handleChange} placeholder="Enter inclusions" className="form-control"></textarea>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="exclusions" className="form-label">Exclusions</label>
              <textarea name="exclusions" onChange={handleChange} placeholder="Enter exclusions" className="form-control"></textarea>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="additional_info" className="form-label">Additional Info</label>
              <textarea name="additional_info" onChange={handleChange} placeholder="Enter additional info" className="form-control"></textarea>
            </div>
          </div>

          <div className='d-flex justify-content-end'>  
              <button type="submit" className="btn btn-primary">
              Add TreksSafari <AiOutlinePlus className="icon ms-2" />
              </button>
          </div>

        </form>
      </div>
    </>
  );
};

export default Add;
