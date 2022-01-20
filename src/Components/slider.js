import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css"; 
import "./slider-theme.css";
import slide1 from './imgs/z1.jpg';
import slide2 from './imgs/z2.jpg';
import slide3 from './imgs/z3.jpg';
import slide4 from './imgs/z4.jpg';
import slide5 from './imgs/z5.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 625,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }, 
          },
          {
            breakpoint: 550,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }, 
          },
          {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }, 
          },
        ],
    };
    return (
      <div className="px-3 py-5">
        <Slider {...settings}>
          <div className="px-4">
              <img src={slide5} className="d-block mx-5" className="gifimg"/>
          </div>
          <div className="px-4">
              <img src={slide1} className="d-block mx-5" className="gifimg"/>
          </div>
          <div className="px-4">
              <img src={slide2} className="d-block mx-5" className="gifimg"/>
          </div>
          <div className="px-4">
              <img src={slide3} className="d-block mx-5" className="gifimg"/>
          </div>
          <div className="px-4">
              <img src={slide4} className="d-block mx-5" className="gifimg"/>
          </div> 
        </Slider>
      </div>
    );
  }
}