import React from 'react';
import styled from 'styled-components';

function Ticket({ list, isLength }) {
  console.log(isLength);
  return (
    <Data>
      <Direction>{isLength ? '가는편' : '오는편'}</Direction>
      <DirectionArea>김포 - 제주</DirectionArea>
      <DirectionDate>10월22일(금)</DirectionDate>
      <Photo>
        <Img alt={list.airline} src={list.logoImage} />
      </Photo>
      <Air>
        <p>{list.airline}</p>
        <p>{list.code}</p>
      </Air>
      <Time>
        <H>{list.arriveTime}</H>
        <Gmp>GMP</Gmp>
      </Time>
      <Div>
        <Arrow alt="화살표" src="/images/arrow.png" />
        <Hour> 1시간 10분 </Hour>
      </Div>
      <Arrive>
        <ArriveTime>{list.departureTime}</ArriveTime>
        <Destination>CJU</Destination>
      </Arrive>
      <Seat>{list.seat}</Seat>
      <Price>{list.price}원</Price>
    </Data>
  );
}

export default Ticket;

const Data = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 70px;
  margin: 10px;
  padding: 5px 30px;
  background-color: white;
  border-radius: 3px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
`;

const Direction = styled.span`
  padding: 5px 5px;
  background-color: ${props => props.theme.subColor};
  border-radius: 2px;
  color: white;
  font-size: 13px;
  font-weight: 600;
`;

const DirectionArea = styled.span`
  padding-top: 3px;
  font-size: 16px;
  font-weight: 500;
`;

const DirectionDate = styled.span`
  padding-top: 3px;
  font-size: 14px;
`;

const Photo = styled.div``;

const Img = styled.img`
  width: 40px;
`;

const Air = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13px;
`;

const Time = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* margin-right: -35px; */
`;

const H = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #343a40;
`;

const Gmp = styled.p`
  font-size: 13px;
  color: #666d75;
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  /* margin-right: -35px; */
`;

const Arrow = styled.img`
  width: 76px;
  height: 8px;
`;

const Hour = styled.p`
  color: #848c94;
  font-size: 13px;
  text-align: center;
`;

const Arrive = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const ArriveTime = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #343a40;
`;

const Destination = styled.p`
  font-size: 13px;
  color: #666d75;
  text-align: center;
`;

const Seat = styled.div`
  font-size: 13px;
  color: #343a40;
`;

const Remain = styled.p`
  font-size: 13px;
  color: #343a40;
`;

const Price = styled.strong`
  /* margin-right: -20px; */
  font-size: 20px;
  font-weight: bold;
`;
