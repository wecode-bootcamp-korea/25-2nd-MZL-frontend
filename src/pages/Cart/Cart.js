import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import DetailedFee from './components/DetailedFee';
import OneWayFlight from './components/OneWayFlight';
// import API from '../../config';

function Cart() {
  const history = useHistory();
  const [departure, arrival] = history.location.state.selectFlight;

  return (
    <CartContainer>
      <ScheduleSelected>
        <OneWayFlight
          ticket={departure}
          title="가는편"
          direction="김포 - 제주"
          date="11월 1일(월)"
          dway="GMP"
          away="CJU"
        />
        <OneWayFlight
          ticket={arrival}
          title="오는편"
          direction="제주 - 김포"
          date="11월 2일(화)"
          dway="CJU"
          away="GMP"
        />
      </ScheduleSelected>
      <DetailedFee
        total={deleteComma(departure.price) + deleteComma(arrival.price)}
      />
    </CartContainer>
  );
}

const deleteComma = str => {
  return Number(str.replace(',', ''));
};

export default Cart;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin-left: auto;
  margin-right: auto;
`;

const ScheduleSelected = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
