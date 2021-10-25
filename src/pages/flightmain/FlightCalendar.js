import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

const FindFlightSchedule = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const DateChanges = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
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
    }
  `;

  return (
    <FlightCalendarWrapper>
      <FlightCalendarAwesome>
        <i class="far fa-calendar" />
      </FlightCalendarAwesome>
      <FlightCalendarContent>
        <DatePicker
          dateFormat={dateFormat}
          locale={ko}
          selected={startDate}
          onChange={DateChanges}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          monthsShown={2}
        />
      </FlightCalendarContent>
    </FlightCalendarWrapper>
  );
};

export default FindFlightSchedule;
