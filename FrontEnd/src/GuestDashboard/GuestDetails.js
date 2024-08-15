import "./GuestDashboard.css";


// Imported Icons
import { AiFillDelete } from "react-icons/ai";
import GuestHeader from "./GuestHeader/GuestHeader";


const GuestDetails = () => {

  return (
    <>
    <GuestHeader/>
    <div className="OutletCSS">
      <div className="pageBody">
        <div className="sectionTitle flex">
          <div>
            <h1>Single Booking Details</h1>
            <p>Full details of the booking submitted by the guest!</p>
          </div>
        </div>

        <div className="detailContainer">
          <span className="topCard flex">
            <span>Mount Apo Experience</span>
            <button className="btn flex">
              Delete Booking <AiFillDelete className="icon" />
            </button>
          </span>
              <div className="guestDetails grid" >
                <div className="flex">
                  <span className="title">Guest Name</span>
                  <span>Maria Juan</span>
                </div>
                <div className="flex">
                  <span className="title">Nationlity</span>
                  <span>Filipino</span>
                </div>
                <div className="flex">
                  <span className="title">Phone</span>
                  <span>09058479228</span>
                </div>
                <div className="flex">
                  <span className="title">Email</span>
                  <span>juan@gmail.com</span>
                </div>

                <div className="flex">
                  <span className="title">Arrival Date</span>
                  <span>August 28, 2024</span>
                </div>
                <div className="flex">
                  <span className="title">Number of People</span>
                  <span>20</span>
                </div>

                <div className="flex">
                  <span className="title">Number of Children</span>
                  <span>3</span>
                </div>
                <div className="grid">
                  <span
                    className="title"
                    style={{
                      color: "#A2CA71",
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    Guest Message
                  </span>
                  <span className="title">So excited</span>
                </div>
              </div>
           
        </div>
      </div>
    </div>
    </>
  );
};

export default GuestDetails;