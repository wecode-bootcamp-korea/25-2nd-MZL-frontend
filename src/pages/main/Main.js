import React from 'react';
import styled from 'styled-components';
import SimpleSlider from '../../components/Advertisement/Advertisement';
import MainCityList from '../maincitylist/MainCityList';
import ProductList from '../../components/ProductList/ProductList';

const Main = () => {
  return (
    <MainPage>
      <MainTitle>어디로 떠나세요?</MainTitle>
      <MainCityList />
      <SimpleSlider />
      <SubTitle>위코더가 보면 좋을 상품</SubTitle>
      <ProductList />
      <SubTitle>25기가 보면 좋을 상품</SubTitle>
      <ProductList />
    </MainPage>
  );
};

const MainPage = styled.main`
  width: 100%;
`;

const MainTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin: 2em 0 1em 11em;
`;

const SubTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 2em 0 0.5em 15em;
`;

export default Main;
