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

  const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px 0',
    fontSize: '16px',
    textAlign: 'left',
  };

  const thStyles = {
    backgroundColor: '#3f6b29',
    color: 'white',
    padding: '12px 15px',
    border: '1px solid #ddd',
  };

  const tdStyles = {
    padding: '12px 15px',
    border: '1px solid #ddd',
    textAlign: 'center',
  };

  const trStyles = {
    backgroundColor: '#f2f2f2',
    '&:nth-child(even)': {
      backgroundColor: '#f9f9f9',
    },
  };

  const actionStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
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
      <div className="OutletCSS">
        <div className="pageBody">
          <div className="sectionTitle flex">
            <div>
              <h1>TreksSafari Guides!</h1>
              <p>All verified guides!</p>
            </div>
            <Link to='/addguide' className="btn flex">
              Add Guide <AiOutlinePlus className="icon" />
            </Link>
          </div>
          <div className="tableDiv">
            <table style={tableStyles}>
              <thead>
                <tr style={trStyles}>
                  <th style={thStyles}>Image</th>
                  <th style={thStyles}>Guide Full Name</th>
                  <th style={thStyles}>Gender</th>
                  <th style={thStyles}>Phone</th>
                  <th style={thStyles}>Email</th>
                  <th style={thStyles}>Guide Role</th>
                  <th style={thStyles}>Action</th>
                </tr>
              </thead>
              <tbody>
                {guides.map(guide => (
                  <tr key={guide.id} style={trStyles}>
                    <td style={tdStyles}>
                      <img style={imgStyles} src={`http://localhost:8000/images/${guide.image}`} alt="Guide" />
                    </td>
                    <td style={tdStyles}>{guide.name}</td>
                    <td style={tdStyles}>{guide.gender}</td>
                    <td style={tdStyles}>{guide.phone}</td>
                    <td style={tdStyles}>{guide.email}</td>
                    <td style={tdStyles}>{guide.role}</td>
                    <td style={{ ...tdStyles, ...actionStyles }}>
                     <Link to={`/editguide/${guide.id}`} className="icon">
                        <BiEdit size={30}/>
                      </Link>
                      <MdOutlineDeleteOutline size={30}
                        className="icon"
                        onClick={() => handleDelete(guide.id)}
                        style={{ cursor: 'pointer', color: 'red' }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guides;
