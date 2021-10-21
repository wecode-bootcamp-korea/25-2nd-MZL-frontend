import React from 'react';
import styled from 'styled-components';
import SideFilter from './SideFilter/SideFilter';

function FilghtBooking() {
  return (
    <>
      <div>날짜날짠ㅇㅇㄴㅇ</div>
      <Container>
        <SideFilter></SideFilter>
        <Book>
          <Filter>
            <FilterText>
              <Result>검색결과 총 26개</Result>
              <Ex>성인 1인 기준 편도 요금입니다. (세금 및 수수료 포함)</Ex>
            </FilterText>
            <Sort></Sort>
          </Filter>
          <Data></Data>
          <Filgths></Filgths>
        </Book>
      </Container>
    </>
  );
}

export default FilghtBooking;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Book = styled.div`
  width: 40%;
  background-color: beige;
`;

const Filter = styled.div`
  height: 60px;
  margin-bottom: 10px;
  background-color: blue;
`;

const Data = styled.div`
  height: 60px;
  margin-bottom: 10px;
  background-color: red;
`;

const Filgths = styled.ul`
  height: 800px;
  background-color: blue;
`;
