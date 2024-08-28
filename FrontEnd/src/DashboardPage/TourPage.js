import React, { useEffect, useState } from "react";
import Axios from "axios";
import { AiOutlineSwapRight, AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import HeaderDash from "./HeaderDashboard/HeaderDash";

const ToursPage = () => {
  const [safaris, setSafaris] = useState([]);

  useEffect(() => {
    fetchSafaris();
  }, []);

  const fetchSafaris = async () => {
    try {
      const response = await Axios.get("http://localhost:8000/api/allHomeSafaris");
      setSafaris(response.data);
    } catch (error) {
      console.error('Error fetching safaris:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this safari?")) {
      try {
        await Axios.delete(`http://localhost:8000/api/safaris/${id}`);
        fetchSafaris(); // Refresh the list after deletion
      } catch (error) {
        console.error('Error deleting safari:', error);
      }
    }
  };

  return (
    <>
      <HeaderDash />
      <div className="container-fluid py-4 mb-5 mt-5 px-5">
        <div className="row mb-4">
          <div className="col-md-8">
            <h1 className="display-5 fw-bold">Upcoming Hikes</h1>
            <p className="lead">Available Hikes added by admin!</p>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
            <Link to="/add" className="btn btn-primary d-flex align-items-center">
              Add Treks Safari <AiOutlinePlus className="ms-2" />
            </Link>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {safaris.map((safari) => (
            <div className="col" key={safari.id}>
              <div className="card h-100 shadow-sm">
                <img src={`http://localhost:8000${safari.image}`} className="card-img-top" alt={safari.title} style={{height: '200px', objectFit: 'cover'}} />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{safari.title}</h5>
                    <span className="">Price: &#8369; {safari.price}</span>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <Link to={`/viewdetails/${safari.id}`} className="btn btn-outline-primary d-flex align-items-center">
                      View Details <AiOutlineSwapRight className="ms-2" />
                    </Link>
                    <button
                      className="btn btn-outline-danger d-flex align-items-center"
                      onClick={() => handleDelete(safari.id)}
                    >
                      Delete <AiFillDelete className="ms-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ToursPage;
