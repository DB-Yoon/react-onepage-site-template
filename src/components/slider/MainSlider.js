import React, { Component } from 'react';
import Slider               from 'react-slick';
import MainSlideImg_1       from 'images/main_slide_img_1.jpg';
import MainSlideImg_2       from 'images/main_slide_img_2.jpg';
import MainSlideImg_3       from 'images/main_slide_img_3.jpg';
import PrevArrowImg         from 'images/prev_arrow.png';
import NextArrowImg         from 'images/next_arrow.png';

const PrevArrow = (props) => {
  const { className, style, onClick } = props;  
  return (
      <button 
        className={className} 
        onClick={onClick}
        style={{ ...style, left:'96px', zIndex:'9', before:{content:'none'}}}
      >
        <img src={PrevArrowImg} alt='PrevArrow' />
      </button>
  );
}

const NextArrow = (props) => {
  const { className, style, onClick } = props;  
  return (
      <button 
        className={className} 
        onClick={onClick}
        style={{ ...style, right:'96px', zIndex:'9' }}
      >
        <img src={NextArrowImg} alt='NextArrow' />
      </button>
  );
}

class MainSlider extends Component{
  render(){
    const settings = {
      dots           : true,
      infinite       : true,
      speed          : 1000,
      slidesToShow   : 1,
      slidesToScroll : 1,
      autoplay       : true,
      autoplaySpeed  : 3000,
      adaptiveHeight : true,
      prevArrow      : <PrevArrow />,
      nextArrow      : <NextArrow />,
      className      : 'slick-slider-custom-css',
      appendDots     : dots => ( 
        <ul style={{ bottom: "57px" }}>{dots}</ul> 
      )
    };

    return(
      <Slider {...settings}>
        <div><img src={MainSlideImg_1} alt='메인 슬라이드 첫번째' /></div>
        <div><img src={MainSlideImg_2} alt='메인 슬라이드 두번째' /></div>
        <div><img src={MainSlideImg_3} alt='메인 슬라이드 세번째' /></div>
      </Slider>
    );
  }
}

export default MainSlider;