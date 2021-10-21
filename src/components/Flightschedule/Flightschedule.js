import React from 'react';
import styled from 'styled-components';

const Flightschedule = props => {
  const {
    airline,
    code,
    logoImage,
    departureTime,
    arriveTime,
    seat,
    extraSeat,
    price,
  } = props;

  return (
    <Container>
      <Photo>
        <Img alt="항공사 로고" src={logoImage} />
      </Photo>
      <Air>
        <p>{airline}</p>
        <p>{code}</p>
      </Air>
      <Time>
        <H>{departureTime}</H>
        <Gmp>GMP</Gmp>
      </Time>
      <Div>
        <Arrow alt="화살표" src="/images/arrow.png" />
        <Hour> 1시간 10분 </Hour>
      </Div>
      <Arrive>
        <ArriveTime>{arriveTime} </ArriveTime>
        <Destination>CJU</Destination>
      </Arrive>
      <Seat> {seat} </Seat>
      <Remain> {extraSeat} </Remain>
      <Price> {price}</Price>
      <Button>선택</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
  width: 784px;
  height: 80px;
  border: 1px solid #c6cacd;
  border-radius: 2px;
`;

const Photo = styled.div`
  margin-left: -30px;
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
`;

const Air = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: -40px;
  font-size: 13px;
`;

const Time = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: -35px;
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
  margin-right: -35px;
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
  margin-right: -20px;
  font-size: 20px;
  font-weight: bold;
`;

const Button = styled.button`
  width: 64px;
  height: 40px;
  margin-right: -20px;
  color: #ffffff;
  background-color: #51abf3;
  font-weight: bold;
  border: none;
  transition: all 0.08s ease-out;
`;

export default Flightschedule;
