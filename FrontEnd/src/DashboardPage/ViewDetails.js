import "./Dashboard.css";
import img from '../assets/card1.jpg'

// Imported Icons
import { BsFillPersonCheckFill } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaBaby } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { Link} from "react-router-dom";

const ViewDetails = () => {

  return (
    <div className="OutletCSS">
      <div className="pageBody">
        <div className="sectionTitle flex">
          <div>
            <h1>Upcoming Hiking</h1>
            <p>Available Hikes added by admin!</p>
          </div>
        </div>

          <div className="SafariDetails grid">
            <div className="imageDiv">
              <div className="imgText">
                <div className="stars flex">
                  <AiOutlineStar className="icon" />
                  <AiOutlineStar className="icon" />
                  <AiOutlineStar className="icon" />
                  <AiOutlineStar className="icon" />
                  <AiOutlineStar className="icon" />
                </div>
                <h3>Mount Apo</h3>
              </div>
               <img src={img} />
            </div>
            <div className="detailsInfo">
              <span className="title">About this Item</span>
              <p>Description</p>
              <div className="specs grid">
                <span className="detailsDiv flex">
                  <AiOutlineFieldTime className="icon" />
                  <small className="infor">Time: 6am</small>
                </span>
                <span className="detailsDiv flex">
                  <BsFillPersonCheckFill className="icon" />
                  <small className="infor">Minimum of guests: 25</small>
                </span>
                <span className="detailsDiv flex">
                  <FaBaby className="icon" />
                  <small className="infor"> Children Price: &#8369; 150</small>
                </span>
              </div>

              <div className="actionButtons flex">
                <span className="price">Price: &#8369; 800</span>
                <Link to='/edit' className="btn buyBtn">
                  Edit TreksSafari
                </Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ViewDetails;