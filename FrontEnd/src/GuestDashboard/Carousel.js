import React from 'react'
import "./Carousel.css"
import img from "../assets/card1.jpg";
import img1 from "../assets/mountapo.png";
import img2 from "../assets/mtbalutao.webp";
import img3 from "../assets/mtmaculot.jpg";
import img4 from "../assets/mtulap.jpg";
import img5 from "../assets/mtpinatubo.webp"

const Carousel = () => {
  return (
    <>
    <div className='carousel_container'>
   <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="2000">
        <img src={img}/>
        <div className="carousel-caption">
          <h1 className="display-2">Mount Pinatubo</h1>
        </div>
      </div>
      <div className="carousel-item">
        <img src={img1}/>
        <div className="carousel-caption">
          <h1 className="display-2">Mount Balutao</h1>
        </div>
      </div>
      <div className="carousel-item">
        <img src={img2}/>
        <div className="carousel-caption">
          <h1 className="display-2">Mount Maculot</h1>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </div>
    </>
  )
}

export default Carousel



