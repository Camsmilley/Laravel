import "./Dashboard.css";

//Imported icons
import { AiOutlinePlus } from "react-icons/ai";
import HeaderDash from "./HeaderDashboard/HeaderDash";


const AddGuide = () => {

  return (
    <>
    <HeaderDash/>
    <div className="OutletCSS">
      <div className="pageBody">
        <div className="sectionTitle">
          <h1>Add New Guide!</h1>
          <p>Add new guide for the world!</p>
        </div>

        <div className="formDiv grid">
          <div className="fieldDiv ">
            <label htmlFor="image">Insert Image</label>
            <input
              type="file"
              id="image"
            />
          </div>

          <div className="fieldDiv ">
            <label htmlFor="sName">Guide Full Name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter Second Name"
            />
          </div>

          <div className="fieldDiv ">
            <label htmlFor="GuideTel">Guide Contact Number</label>
            <input
              type="number"
              name="guideContact"
              id="GuideTel"
              placeholder="Enter guide phone number"
            />
          </div>

          <div className="fieldDiv ">
            <label htmlFor="GuideEmail">Guide Email</label>
            <input
              type="email"
              id="GuideEmail"
              name="guideEmail"
              placeholder="Enter guide email"
            />

          </div>
          <div className="fieldDiv ">
            <label htmlFor="password">Guide Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter guide password"
            />
          </div>

          <div className="fieldDiv ">
            <label htmlFor="GuideRole">Guide Role</label>
            <select>
              <option value="guide">Guide</option>
              <option value="admin">Administrator</option>
            </select>
          </div>

          <button className="btn flex">
            Add Guide <AiOutlinePlus className="icon" />
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default AddGuide;