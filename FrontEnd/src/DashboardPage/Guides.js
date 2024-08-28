import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";
import HeaderDash from "./HeaderDashboard/HeaderDash";

const Guides = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const response = await Axios.get('http://localhost:8000/api/guides');
        setGuides(response.data);
      } catch (error) {
        console.error('Error fetching guides:', error);
      }
    };

    fetchGuides();
  }, []);

  const handleDelete = async (id) => {
    try {
      await Axios.delete(`http://localhost:8000/api/guides/${id}`);
      setGuides(guides.filter(guide => guide.id !== id));
    } catch (error) {
      console.error('Error deleting guide:', error);
    }
  };

  const imgStyles = {
    maxWidth: '50px',
    maxHeight: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  return (
    <>
      <HeaderDash />
      <div className="container-fluid my-5 px-5">
        <div className="row">
          <div className="col-12">
            <div className="sectionTitle d-flex justify-content-between align-items-center">
              <div>
                <h1 className="mb-4 fw-bold">TreksSafari Guides!</h1>
                <p>All verified guides!</p>
              </div>
              <Link to='/addguide' className="btn btn-primary d-flex align-items-center">
                Add Guide <AiOutlinePlus className="ms-2" />
              </Link>
            </div>

            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-success">
                  <tr>
                    <th>Image</th>
                    <th>Guide Full Name</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Guide Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {guides.map(guide => (
                    <tr key={guide.id}>
                      <td>
                        <img style={imgStyles} src={`http://localhost:8000/images/${guide.image}`} alt="Guide" />
                      </td>
                      <td>{guide.name}</td>
                      <td>{guide.gender}</td>
                      <td>{guide.phone}</td>
                      <td>{guide.email}</td>
                      <td>{guide.role}</td>
                      <td className="text-center">
                        <Link to={`/editguide/${guide.id}`} className="me-2">
                          <BiEdit size={30} style={{ color: '#3f6b29' }} />
                        </Link>
                        <MdOutlineDeleteOutline
                          size={30}
                          className="text-danger"
                          onClick={() => handleDelete(guide.id)}
                          style={{ cursor: 'pointer' }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guides;
