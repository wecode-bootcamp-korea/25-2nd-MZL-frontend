import React from 'react';
import styled from 'styled-components';

function OneWayFlight({ ticket, title, direction }) {
  const { airline, code, logoImage, departureTime, arriveTime, seat, price } =
    ticket;

  return (
    <Data>
      <Direction>{title}</Direction>
      <DirectionArea>{direction}</DirectionArea>
      <DirectionDate>10월22일(금)</DirectionDate>
      <Photo>
        <Img alt={airline} src={logoImage} />
      </Photo>
      <Air>
        <p>{airline}</p>
        <p>{code}</p>
      </Air>
      <Time>
        <H>{arriveTime}</H>
        <Gmp>GMP</Gmp>
      </Time>
      <Div>
        <Arrow alt="화살표" src="/images/arrow.png" />
        <Hour> 1시간 10분 </Hour>
      </Div>
      <Arrive>
        <ArriveTime>{departureTime}</ArriveTime>
        <Destination>CJU</Destination>
      </Arrive>
      <Seat>{seat}</Seat>
      <Price>{price.toLocaleString()}원</Price>
    </Data>
  );
}

export default OneWayFlight;

const Data = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  margin: 10px 0 24px 0;
  padding: 16px 24px;
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

const Price = styled.strong`
  font-size: 20px;
  font-weight: bold;
`;
