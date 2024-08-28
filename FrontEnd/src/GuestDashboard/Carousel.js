import React from 'react';

import img from "../assets/card1.jpg";
import img1 from "../assets/mountapo.png";
import img2 from "../assets/mtbalutao.webp";
import img3 from "../assets/mtmaculot.jpg";
import img4 from "../assets/mtulap.jpg";
import img5 from "../assets/mtpinatubo.webp";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          {[...Array(6)].map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {[
            { img: img, title: "Mount Pulag" },
            { img: img1, title: "Mount Apo" },
            { img: img2, title: "Mount Balutao" },
            { img: img3, title: "Mount Maculot" },
            { img: img4, title: "Mount Ulap" },
            { img: img5, title: "Mount Pinatubo" },
          ].map((slide, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="2000">
              <img className="d-block w-100" src={slide.img} alt={slide.title} />
              <div className="carousel-caption">
                <h1 className="display-2">{slide.title}</h1>
              </div>
            </div>
          ))}
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
  );
};

export default Carousel;