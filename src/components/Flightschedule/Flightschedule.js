import React from 'react';
import styled from 'styled-components';

const Flightschedule = props => {
  const {
    airline,
    logoImage,
    departureTime,
    arriveTime,
    seat,
    extraSeat,
    price,
    getSelectFlight,
    airport_arrive_eng,
    airport_depart_eng,
    id,
  } = props;

  return (
    <Container>
      <Photo>
        <Img src={logoImage} />
      </Photo>
      <Air>
        <p>{airline}</p>
        <p>SN394</p>
      </Air>
      <Time>
        <H>{departureTime}</H>
        <Gmp>{airport_depart_eng}</Gmp>
      </Time>
      <Div>
        <Arrow alt="화살표" src="/images/arrow.png" />
        <Hour> 1시간 10분 </Hour>
      </Div>
      <Arrive>
        <ArriveTime>{arriveTime} </ArriveTime>
        <Destination>{airport_arrive_eng}</Destination>
      </Arrive>
      <Seat> {seat} </Seat>
      <Remain> {extraSeat} </Remain>
      <Price> {price}원</Price>
      <Button onClick={() => getSelectFlight(props)}>선택</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 20px;
  width: 100%;
  height: 80px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 3px;
  &:hover {
    box-shadow: 0px 0.3px 0.5px 0.3px rgba(0, 0, 0, 0.2);
  }
`;

const Photo = styled.div``;

const Img = styled.img`
  width: 40px;
  margin-right: 10px;
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
  color: #ffffff;
  background-color: #51abf3;
  font-weight: bold;
  border: none;
  transition: all 0.08s ease-out;

  &:hover {
    background-color: ${props => props.theme.subColor};
    cursor: pointer;
  }
`;

export default Flightschedule;
