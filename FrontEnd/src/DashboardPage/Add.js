import './Dashboard.css'

//Imported icons
import { AiOutlinePlus } from "react-icons/ai";
import HeaderDash from './HeaderDashboard/HeaderDash';

const Add = () => {

  return (
    <>
    <HeaderDash/>
    <div className="OutletCSS">
      <div className="pageBody">
        <div className="sectionTitle">
          <h1>Add New Mountain</h1>
          <p>Add new experience for the world!</p>
        </div>

        <form action="" encType="multipart/form-data">
          <div className="formDiv grid">
            <div className="fieldDiv ">
              <label htmlFor="safariName">Mountain Name</label>
              <input
                type="text"
                placeholder="Enter Mountain Name"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="price"> Price</label>
              <input
                type="number"
                placeholder="Enter Safari Price"
              />
            </div>

            <div className="fieldDiv">
              <div className="fieldDiv">
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  id="image"
                />
              </div>
            </div>

            <div className="fieldDiv">
              <label htmlFor="time">Duration</label>
              <input
                type="text"
                id="time"
                placeholder="Enter duration"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="childCat">Children Category</label>
              <input
                type="text"
                id="childCat"
                placeholder="Whats child category price?"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="childPrice">Children Price</label>
              <input
                type="number"
                id="childPrice"
                placeholder="Whats child category price?"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="totalGuests">Maximum Guests</label>
              <input
                type="number"
                id="totalGuests"
                placeholder="Whats the max number of guests?"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="desc">Description</label>
              <textarea
                id="desc"
                placeholder="Enter description"
              ></textarea>
            </div>

            <button className="flex addSafariBtn">
              Add TreksSafari <AiOutlinePlus className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Add;