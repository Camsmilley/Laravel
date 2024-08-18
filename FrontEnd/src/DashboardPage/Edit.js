import React from "react";
import "./Dashboard.css";

//Imported icons
import { AiOutlinePlus } from "react-icons/ai";

const Edit = () => {

  return (
    <div className="OutletCSS">
      <div className="pageBody">
        <div className="sectionTitle">
          <h1>Edit TrkesSafari!</h1>
          <p>Edit this TreksSafari!</p>
        </div>

        <form action="" encType="multipart/form-data">
          <div className="formDiv grid">
            <div className="fieldDiv ">
              <label htmlFor="safariName"> Name</label>
              <input
                type="text"
                id="safariName"
                placeholder="Enter Name"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                placeholder="Enter  Price"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="image">Image</label>
              <input type="file" name="image" id="image" />
            </div>

            <div className="fieldDiv">
              <label htmlFor="time"> Timing</label>
              <input
                type="text"
                id="time"
                placeholder="Enter timings"
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
                type="text"
                name="safDescription"
                placeholder="Enter trekssafari description"
              ></textarea>
            </div>

            <button  className="flex addSafariBtn">
              Edit TreksSafari <AiOutlinePlus className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;