import React, { useState, useEffect } from 'react';
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
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12">
            <div className="sectionTitle">
              <h1 className="mb-4 fw-bold">Edit TreksSafari</h1>
              <p className="mb-4">Update this TreksSafari experience!</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Enter title" className="form-control" />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="min_guests" className="form-label">Minimum Guests</label>
              <input type="number" name="min_guests" value={formData.min_guests} onChange={handleChange} placeholder="Enter minimum guests" className="form-control" />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="location" className="form-label">Location</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Enter location" className="form-control" />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="price" className="form-label">Price</label>
              <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Enter price" className="form-control" />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="image" className="form-label">Image</label>
              {currentImage && (
                <div>
                  <img src={`http://localhost:8000${currentImage}`} alt="Current Safari" style={{maxWidth: '200px', marginBottom: '10px'}} className="img-fluid" />
                  <p>Current image</p>
                </div>
              )}
              <input type="file" name="image" onChange={handleChange} className="form-control" />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Enter description" className="form-control"></textarea>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="inclusions" className="form-label">Inclusions</label>
              <textarea name="inclusions" value={formData.inclusions} onChange={handleChange} placeholder="Enter inclusions" className="form-control"></textarea>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="exclusions" className="form-label">Exclusions</label>
              <textarea name="exclusions" value={formData.exclusions} onChange={handleChange} placeholder="Enter exclusions" className="form-control"></textarea>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="additional_info" className="form-label">Additional Info</label>
              <textarea name="additional_info" value={formData.additional_info} onChange={handleChange} placeholder="Enter additional info" className="form-control"></textarea>
            </div>
          </div>
          <div className='d-flex justify-content-end'>  
            <button type="submit" className="btn btn-primary">
            Update TreksSafari <AiOutlinePlus className="ms-2" />
            </button>
          </div>
        
        </form>
      </div>
    </>
  );
};

export default Edit;
