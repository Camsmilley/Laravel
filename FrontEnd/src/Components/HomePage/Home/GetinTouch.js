import React from 'react'
import { IoIosContacts } from "react-icons/io";

const GetinTouch = () => {
  return (
    <>
         <div className="col-lg-4">
            <div className="card bg-success text-dark mb-6">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <IoIosContacts  className="text-success" size={50} />
                </div>
                <div className="ms-3">
                  <h5 className="card-title">Total Tours</h5>
                  <h3 className="card-text text-dark"></h3>
                </div>
              </div>
            </div>
            </div>

    </>
    
  )
}

export default GetinTouch
