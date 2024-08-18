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
    <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="2000">
        <img className="d-block w-100" src={img}/>
        <div className="carousel-caption">
          <h1 className="display-2">Mount Pulag</h1>
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={img1}/>
        <div className="carousel-caption">
          <h1 className="display-2">Mount Apo</h1>
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={img2}/>
        <div className="carousel-caption">
          <h1 className="display-2">Mount Balutao</h1>
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={img3}/>
        <div className="carousel-caption">
          <h1 className="display-2">Mount Maculot</h1>
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={img4}/>
        <div className="carousel-caption">
          <h1 className="display-2">Mount Ulap</h1>
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={img5}/>
        <div className="carousel-caption">
          <h1 className="display-2">Mount Pinatubo</h1>
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
    </>
  )
}

export default Carousel



