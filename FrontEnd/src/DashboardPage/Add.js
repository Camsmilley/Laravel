import React, { useState } from 'react';
import './Dashboard.css';
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
      <div className="OutletCSS">
        <div className="pageBody">
          <div className="sectionTitle">
            <h1>Add New Treks Safari</h1>
            <p>Add new experience for the world!</p>
          </div>

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="formDiv grid">
              <div className="fieldDiv">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" onChange={handleChange} placeholder="Enter title" required />
              </div>

              <div className="fieldDiv">
                <label htmlFor="min_guests">Minimum Guests</label>
                <input type="number" name="min_guests" onChange={handleChange} placeholder="Enter minimum guests" required />
              </div>

              <div className="fieldDiv">
                <label htmlFor="time_estimate">Time Estimate</label>
                <input type="text" name="time_estimate" onChange={handleChange} placeholder="Enter time estimate" required />
              </div>

              <div className="fieldDiv">
                <label htmlFor="location">Location</label>
                <input type="text" name="location" onChange={handleChange} placeholder="Enter location" required />
              </div>

              <div className="fieldDiv">
                <label htmlFor="price">Price</label>
                <input type="text" name="price" onChange={handleChange} placeholder="Enter price" required />
              </div>

              <div className="fieldDiv">
                <label htmlFor="image">Image</label>
                <input type="file" name="image" onChange={handleChange} required />
              </div>

              <div className="fieldDiv">
                <label htmlFor="description">Description</label>
                <textarea name="description" onChange={handleChange} placeholder="Enter description"></textarea>
              </div>

              <div className="fieldDiv">
                <label htmlFor="inclusions">Inclusions</label>
                <textarea name="inclusions" onChange={handleChange} placeholder="Enter inclusions"></textarea>
              </div>

              <div className="fieldDiv">
                <label htmlFor="exclusions">Exclusions</label>
                <textarea name="exclusions" onChange={handleChange} placeholder="Enter exclusions"></textarea>
              </div>

              <div className="fieldDiv">
                <label htmlFor="additional_info">Additional Info</label>
                <textarea name="additional_info" onChange={handleChange} placeholder="Enter additional info"></textarea>
              </div>

              <button type="submit" className="flex addSafariBtn">
                Add TreksSafari <AiOutlinePlus className="icon" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Add;
