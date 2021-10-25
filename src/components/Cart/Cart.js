import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DetailedFee from './components/DetailedFee';
import OneWayFlight from './components/OneWayFlight';

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScheduleSelected = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

function Cart() {
  const [flightInfo, setFlightInfo] = useState([]);

  useEffect(() => {
    fetch('/data/FeeData.json')
      .then(res => res.json())
      .then(data => {
        setFlightInfo(data.flights);
      });
  }, []);

  if (!flightInfo || !flightInfo[0] || !flightInfo[1]) return null;
  return (
    <CartContainer>
      <ScheduleSelected>
        <OneWayFlight
          ticket={flightInfo[0]}
          title="가는편"
          direction="김포 - 제주"
        />
        <OneWayFlight
          ticket={flightInfo[1]}
          title="오는편"
          direction="제주 - 김포"
        />
      </ScheduleSelected>
      <DetailedFee total={flightInfo[0].price + flightInfo[1].price} />
    </CartContainer>
  );
}

export default Cart;
