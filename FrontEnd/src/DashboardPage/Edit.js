import React, { useState, useEffect } from 'react';
import "./Dashboard.css";
import Axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";
import HeaderDash from './HeaderDashboard/HeaderDash';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    min_guests: '',
    location: '',
    price: '',
    image: null,
    description: '',
    inclusions: '',
    exclusions: '',
    additional_info: '',
  });
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    fetchSafari();
  }, []);

  const fetchSafari = async () => {
    try {
      const response = await Axios.get(`http://localhost:8000/api/safaris/${id}`);
      setFormData(response.data);
      setCurrentImage(response.data.image);
    } catch (error) {
      console.error('Error fetching safari:', error);
    }
  };

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
      if (key === 'image') {
        if (formData[key] instanceof File) {
          data.append(key, formData[key]);
        }
      } else {
        data.append(key, formData[key]);
      }
    }

    try {
      await Axios.post(`http://localhost:8000/api/safaris/${id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      navigate('/tourpage');
    } catch (error) {
      console.error('Error updating safari:', error);
    }
  };

  return (
    <>
      <HeaderDash />
      <div className="OutletCSS">
        <div className="pageBody">
          <div className="sectionTitle">
            <h1>Edit TreksSafari</h1>
            <p>Update this TreksSafari experience!</p>
          </div>

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="formDiv grid">
              <div className="fieldDiv">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Enter title" />
              </div>

              <div className="fieldDiv">
                <label htmlFor="min_guests">Minimum Guests</label>
                <input type="number" name="min_guests" value={formData.min_guests} onChange={handleChange} placeholder="Enter minimum guests" />
              </div>

              <div className="fieldDiv">
                <label htmlFor="location">Location</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Enter location" />
              </div>

              <div className="fieldDiv">
                <label htmlFor="price">Price</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Enter price" />
              </div>

              <div className="fieldDiv">
                <label htmlFor="image">Image</label>
                {currentImage && (
                  <div>
                    <img src={`http://localhost:8000${currentImage}`} alt="Current Safari" style={{maxWidth: '200px', marginBottom: '10px'}} />
                    <p>Current image</p>
                  </div>
                )}
                <input type="file" name="image" onChange={handleChange} />
              </div>

              <div className="fieldDiv">
                <label htmlFor="description">Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Enter description"></textarea>
              </div>

              <div className="fieldDiv">
                <label htmlFor="inclusions">Inclusions</label>
                <textarea name="inclusions" value={formData.inclusions} onChange={handleChange} placeholder="Enter inclusions"></textarea>
              </div>

              <div className="fieldDiv">
                <label htmlFor="exclusions">Exclusions</label>
                <textarea name="exclusions" value={formData.exclusions} onChange={handleChange} placeholder="Enter exclusions"></textarea>
              </div>

              <div className="fieldDiv">
                <label htmlFor="additional_info">Additional Info</label>
                <textarea name="additional_info" value={formData.additional_info} onChange={handleChange} placeholder="Enter additional info"></textarea>
              </div>

              <button type="submit" className="flex addSafariBtn">
                Update TreksSafari <AiOutlinePlus className="icon" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;