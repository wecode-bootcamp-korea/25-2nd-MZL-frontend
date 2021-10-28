import React from 'react';
import styled from 'styled-components';
import SimpleSlider from '../../components/Advertisement/Advertisement';
import Searchflight from '../../components/flightmain/Searchflight';
import AirProductList from '../../components/flightmain/AirProductList';
import ProductList from '../../components/ProductList/ProductList';

const FlightMainPage = () => {
  return (
    <Flightmain>
      <Searchflight />
      <SimpleSlider />
      <Subtitle>세계 최고가 항공권</Subtitle>
      <AirProductList />
      <Subtitle>세계 최고가 상품</Subtitle>
      <ProductList />
    </Flightmain>
  );
};

const Flightmain = styled.main`
  width: 100%;
  height: 100%;
`;

const Subtitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-top: 3em;
  margin-left: 18em;
`;

export default FlightMainPage;
