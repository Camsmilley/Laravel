import "./GuestDashboard.css";

// Imported icons
// import { BiEdit } from "react-icons/bi";
// import { AiOutlinePlus } from "react-icons/ai";
// import { MdOutlineDeleteOutline } from "react-icons/md";
// import { Link } from "react-router-dom";
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
              <th>ID</th>
              <th>Guide Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>

            <tbody>
                <tr className="tableRows flex" >
                  <td>ID</td>
                  <td>Name</td>
                  <td>Contact</td>
                  <td>Email</td>
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