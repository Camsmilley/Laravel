
import "./Dashboard.css";

import Video from "../assets/video1.mp4";
import img from "../assets/card1.jpg"

import { BsFillPersonCheckFill } from "react-icons/bs";


const Dashboard = () => {
 
  return (
    <div className="OutletCSS">
      <div className="pageBody">
        <div className="topSection">
          <div className="sectionTitle">
            <h1>Treks Safari Guest Dashboard</h1>
            <p>This is where everything starts to happen!</p>
          </div>

          <div className="video_Summary">
            <div className="flexLeft flex">
              <div className="videoDiv">
                <video src={Video} autoPlay loop muted></video>
              </div>
              <div className="videoText">
                <h4>Looking an extraordinary service for the community!</h4>

                <div className="btns flex">
                  <a src='' className="link bg">
                    We based to serve
                  </a>
                  <a src='' className="link ">
                    Love for the Hikes
                  </a>
                </div>
              </div>
            </div>

            <div className="flexRight">
              <span>Upcoming Bookings</span>
              
                <div className="singleBooking" >
                  <span>Booking Name</span>
                  <div className="flex">
                    <small>Number of person People</small>
                    <small>Booking Date </small>
                  </div>
                </div>
            
            </div>
          </div>
        </div>
        <div className="bottomSection">
          <span className="title">Popular Tours</span>
          <div className="toursContainer flex">
              <div className="singleTour grid">
                <div className="imgDiv">
                  
                    <img src={img}
                    />
                 
                </div>
                <div className="tourInfo">
                  <span className="tourTitle">Mount Pinatubo</span>
                  <div className="detailsDiv flex">
                    <BsFillPersonCheckFill className="icon" />

                    <small className="infor">
                      Minimum of Number of person guests
                    </small>
                  </div>

                  {/* <Link
                    to={`/bookingDetails/${safari.id}`}
                    className="btn flex"
                  >
                    View Details <AiOutlineSwapRight className="icon" />
                  </Link> */}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
