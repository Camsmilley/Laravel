import React, { useEffect, useState } from "react";
import "./Dashboard.css";
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
      <div className="OutletCSS">
        <div className="pageBody">
          <div className="sectionTitle flex">
            <div>
              <h1>Upcoming Hikes</h1>
              <p>Available Hikes added by admin!</p>
            </div>
            <Link to="/add" className="btn flex">
              Add Treks Safari <AiOutlinePlus className="icon" />
            </Link>
          </div>

          <div className="tourContainer grid">
            {safaris.map((safari) => (
              <div className="singleTour grid" key={safari.id}>
                <div className="imgDiv">
                <img src={`http://localhost:8000${safari.image}`} alt={safari.title} />
                </div>
                <div className="tourInfo">
                  <span className="tourTitle">{safari.title}</span>

                  <div className="btns flex">
                  <Link to={`/viewdetails/${safari.id}`} className="btn flex">
                    View Details <AiOutlineSwapRight className="icon" />
                  </Link>
                  {/* <Link to={`/edit/${safari.id}`} className="btn flex">
                    Edit
                  </Link> */}
                    <button
                      className="btn flex"
                      onClick={() => handleDelete(safari.id)}
                    >
                      Delete Item <AiFillDelete className="icon" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToursPage;