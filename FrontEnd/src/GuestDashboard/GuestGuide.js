import "./GuestDashboard.css";

// Imported icons
import { BiEdit } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import img from "../assets/avatar.png"
import GuestHeader from "./GuestHeader/GuestHeader";

const Guides = () => {

  return (
    <>
    <GuestHeader/>
    <div className="OutletCSS">
      <div className="pageBody">
        <div className="sectionTitle flex">
          <div>
            <h1>TreksSafari Guides!</h1>
            <p>All verified guides!</p>
          </div>
        </div>

        <div className="tableDiv">
          <table>
            <tr className="tableHeaders flex">
            <th>Image</th>
              <th>Guide Full Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Sex</th>
              <th>Guide Role</th>
            </tr>

            <tbody>
                <tr className="tableRows flex" >
                <td><img style={{ maxWidth: '50px', maxHeight: '50px' }}src={img}/></td>
                  <td>Name</td>
                  <td>Contact</td>
                  <td>Email</td>
                  <td>Female</td>
                  <td>Role</td>
                </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default Guides;