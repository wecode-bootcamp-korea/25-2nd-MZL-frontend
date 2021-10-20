import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplayspeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centermode: true,
};

const ImageLists = [
  { id: 0, src: '/images/11.png' },
  { id: 1, src: '/images/13.png' },
  { id: 2, src: '/images/14.png' },
  { id: 3, src: '/images/15.png' },
  { id: 4, src: '/images/16.png' },
];

const SliderWrap = styled.div`
  margin: 150px 120px 150px 120px;

  img {
    width: 100%;
    height: 30em;
    border-radius: 9px;
    // object-fit: cover;
    cursor: pointer;
  }

  .slick-prev {
    left: 20px;
    z-index: 1;
    width: 35px;
    height: 35px;
    border-radius: 50%;

    :before {
      font-family: 'slick';
      font-size: 40px;
      line-height: 1;
      opacity: 0.1;
      color: #000000;
    }

    :hover {
      background-color: #f2f2f2;
    }
  }

  .slick-next {
    right: 20px;
    width: 35px;
    height: 35px;
    border-radius: 50%;

    :before {
      font-family: 'slick';
      font-size: 40px;
      line-height: 1;
      opacity: 0.1;
      color: #000000;
    }

    :hover {
      background-color: #f2f2f2;
    }
  }
`;

export default class SimpleSlider extends Component {
  render() {
    return (
      <SliderWrap>
        <Slider {...settings}>
          {ImageLists.map(images => (
            <img key={images.id} alt="!" src={images.src} />
          ))}
        </Slider>
      </SliderWrap>
    );
  }
}
