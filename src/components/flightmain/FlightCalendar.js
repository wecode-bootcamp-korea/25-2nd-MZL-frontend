import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

const FlightSchedule = ({ startDate, selectDates, endDate }) => {
  return (
    <FlightCalendarWrapper>
      <FlightCalendarAwesome>
        <i className="far fa-calendar" />
      </FlightCalendarAwesome>
      <FlightCalendarContent>
        <DatePicker
          dateFormat={dateFormat}
          locale={ko}
          selected={startDate}
          onChange={selectDates}
          minDate={new Date()}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          monthsShown={2}
        />
      </FlightCalendarContent>
    </FlightCalendarWrapper>
  );
};

const dateFormat = 'MM월 dd일';

const FlightCalendarWrapper = styled.section`
  display: flex;
  align-items: center;
  border: 2px solid #f0f3f5;
  gap: 0.5em;
  margin-left: 1em;
  padding-left: 0.5em;
`;

const FlightCalendarAwesome = styled.div`
  font-size: 20px;
  padding: 0.47em 0;
  color: #2b96ec;
`;

const FlightCalendarContent = styled.div`
  input {
    padding: 0 3em;
    text-align: center;
    border: none;
    font-size: 15px;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
export default FlightSchedule;
