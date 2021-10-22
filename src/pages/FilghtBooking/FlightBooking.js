import React from 'react';
import styled from 'styled-components';
import SelectFilter from './SideFilter/SelectFilter';

function FilghtBooking() {
  return (
    <>
      <div>날짜날짠ㅇㅇㄴㅇ</div>
      <Container>
        <SelectFilter></SelectFilter>
        <Booking>
          <FilterList>
            <FilterText>
              <Result>검색결과 총 26개</Result>
              <Ex>성인 1인 기준 편도 요금입니다. (세금 및 수수료 포함)</Ex>
            </FilterText>
            <Sort>
              <option>가격 낮은 순</option>
              <option>출발 시간 빠른 순</option>
              <option>출발 시간 늦은 순</option>
            </Sort>
          </FilterList>
          <Data>
            <Direction>가는편</Direction>
            <DirectionArea>김포 - 제주</DirectionArea>
            <DirectionDate>10월22일(금)</DirectionDate>
          </Data>
          <Filgths></Filgths>
        </Booking>
      </Container>
    </>
  );
}

export default FilghtBooking;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 17px;
  background-color: ${props => props.theme.subBackground};
`;

const Booking = styled.div`
  width: 40%;
`;

const FilterList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin-bottom: 10px;
`;

const FilterText = styled.div``;

const Result = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 400;
`;

const Ex = styled.div`
  color: gray;
  font-size: 12px;
`;

const Sort = styled.select`
  width: 20%;
  padding: 10px 8px;
  border: 0.5px solid #d2d4d6;
  border-radius: 3px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  &:hover {
    border: 0.5px solid black;
  }
`;

const Data = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  height: 60px;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 3px;
`;

const Direction = styled.span`
  padding: 5px 5px;
  margin-right: 10px;
  border: 0.5px solid ${props => props.theme.subColor};
  border-radius: 2px;
  color: ${props => props.theme.subColor};
  font-size: 13px;
  font-weight: 600;
`;

const DirectionArea = styled.span`
  margin-right: 1.5%;
  padding-top: 3px;
  font-size: 16px;
  font-weight: 500;
`;

const DirectionDate = styled.span`
  padding-top: 3px;
  font-size: 14px;
`;

const Filgths = styled.ul`
  background-color: beige;
  height: 800px;
`;
