import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components/macro';
import AirProductCard from './AirProductCard';

function AirProductList() {
  const [airProductList, setAirProductList] = useState([]);

  useEffect(() => {
    fetch('http://10.58.6.180:8000/menus/planecategory')
      .then(res => res.json())
      .then(data => {
        setAirProductList(data.plane_info);
      });
  }, []);

  return (
    <SliderContainer>
              
      <Slider {...settings}>
        {airProductList.map(plane_info => {
          return (
            <AirProductCard
              key={plane_info.id}
              departure_airport={plane_info.departure_airport}
              start_date={plane_info.start_date}
              arrive_airport={plane_info.arrive_airport}
              img_url={plane_info.image}
              end_date={plane_info.end_date}
              price={plane_info.price}
            />
          );
        })}
      </Slider>
            
    </SliderContainer>
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 4,
};

const SliderContainer = styled.div`
  padding: 2px 0 8px 0;
  width: 1600px;
  margin-left : 460px;

  .slick-prev {
    height: 40px;
    width: 40px;
    left: -10px;
    border-radius: 50%;
    border: 1px solid #dee2e6;
    background-color: #fff;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 2px 6px 0 rgb(0 0 0 / 5%),
      0 4px 12px 0 rgb(0 0 0 / 5%);
    text-align: center;
    z-index: 10;

    :before {
    font-family: 'slick';
    font-size: 15px;
    color: black;
    vertical-align: middle;
}
    }
    :hover {
    }
  }
  .slick-next {
    width: 40px;
    height: 40px;
    right: -15px;
    border-radius: 50%;
    border: 1px solid #dee2e6;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 2px 6px 0 rgb(0 0 0 / 5%),
      0 4px 12px 0 rgb(0 0 0 / 5%);
    text-align: center;
    z-index: 10;

    :before {
      font-family: 'slick';
      font-size: 15px;
      color: black;
      vertical-align: middle;
}
    }
    :hover {
  
    }
`;

export default AirProductList;
