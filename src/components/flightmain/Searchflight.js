import React, { useState } from 'react';
import { useHistory } from 'react-router';
import FlightSchedule from './FlightCalendar';
import styled from 'styled-components/macro';
import RouteTable from './RouteTable';
import Passengers from './Flightpassengers';

const Searchflight = () => {
  const history = useHistory();
  const [isModalOpen, setIsOpenModal] = useState(false);
  const [cities, setCities] = useState({ departure: '', arrival: '' });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [inputClicked, setInputClicked] = useState('');
  const [buttonModal, setButtonModal] = useState(false);
  const [passengers, setPassengers] = useState({ adult: 1, kid: 0, baby: 0 });
  const [seatType, setSeatType] = useState('');

  const handleInputModal = e => {
    setInputClicked(e.target.name);
    setIsOpenModal(!isModalOpen);
  };

  const handleButtonModal = e => {
    if (e.target !== e.currentTarget) return;

    setButtonModal(!buttonModal);
  };

  const changeData = () => {
    setCities({ departure: cities.arrival, arrival: cities.departure });
  };

  const selectCity = e => {
    if (inputClicked === 'departure') {
      setCities({ ...cities, departure: e.target.innerText });
    } else {
      setCities({ ...cities, arrival: e.target.innerText });
    }
    setIsOpenModal(false);
  };

  const selectDates = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handlePassengers = () => {
    setPassengers();
  };

  const handleSeatType = e => {
    setSeatType(e.target.value);
  };

  const countPassengers = e => {
    e.preventDefault();
    if (e.target.innerText === '+') {
      if (passengersTotal === 9) {
        alert('정원은 9명을 초과할 수 없습니다.');
        return;
      }
      setPassengers({ ...passengers, adult: passengers.adult + 1 });
    } else if (e.target.innerText === '-') {
      if (passengers.adult === 0) return;
      setPassengers({ ...passengers, adult: passengers.adult - 1 });
    }
  };

  const handleBtn = () => {
    history.push(
      `/air?departure=${cities.departure}&arriaval=${cities.arrival}`
    );
  };

  // console.log(
  //   `${startDate.getMonth() + 1}-${startDate.getDate()}`,
  //   `${endDate?.getMonth() + 1}-${endDate?.getDate()}`
  // );

  const passengersTotal = Object.values(passengers).reduce(
    (acc, cur) => acc + cur
  );
  return (
    <SearchMain>
      <SearchSection>
        <SearchWrap>
          <SearchHeader>
            <SearchHeaderul>
              <SearchHeaderdiv>
                <SearchHeaderSelector>
                  <SelectorButton>왕복</SelectorButton>
                  <SelectorButton>편도</SelectorButton>
                  <SelectorButton>다구간</SelectorButton>
                </SearchHeaderSelector>
              </SearchHeaderdiv>
              <Reservationlist>
                <SearchHeaderSelector>
                  <SelectorButton>
                    항공권 예약내역
                    <i className="fas fa-chevron-circle-right" />
                  </SelectorButton>
                </SearchHeaderSelector>
                <SelectorButton>
                  비회원 예약내역
                  <i className="fas fa-chevron-circle-right" />
                </SelectorButton>
              </Reservationlist>
            </SearchHeaderul>
          </SearchHeader>
          <SelectJourney>
            <Journey>
              <JourneyTitle>왕복/편도 출국 귀국 선택</JourneyTitle>
              <Journeyul>
                <Journeyli>
                  <JourneyLocation>
                    <Journeyinput
                      placeholder="출발지가 어디인가요?"
                      name="departure"
                      onClick={handleInputModal}
                      value={cities.departure}
                    />
                    {isModalOpen ? (
                      <RouteTable
                        handleModal={handleInputModal}
                        selectCity={selectCity}
                      />
                    ) : (
                      <RouteTableMainOFF />
                    )}
                    <JourneyButton onClick={changeData}>
                      <i className="fas fa-arrows-alt-h" />
                    </JourneyButton>
                    <Journeyinput
                      placeholder="도착지가 어딘가요?"
                      name="arrival"
                      onClick={handleInputModal}
                      value={cities.arrival}
                    />
                  </JourneyLocation>
                  <JourneyCalendar>
                    <FlightSchedule
                      startDate={startDate}
                      selectDates={selectDates}
                      endDate={endDate}
                    />
                  </JourneyCalendar>
                  <ResevationButtonWrapper>
                    <PassengerReservationButton onClick={handleButtonModal}>
                      {buttonModal && (
                        <Passengers
                          passengers={passengers}
                          seatType={seatType}
                          handlePassengers={handlePassengers}
                          handleSeatType={handleSeatType}
                          countPassengers={countPassengers}
                        />
                      )}
                      <PassengerFontawesome>
                        <i className="far fa-user" />
                      </PassengerFontawesome>
                      승객 {passengersTotal}명, {seatType}
                    </PassengerReservationButton>
                  </ResevationButtonWrapper>
                  <SearchButton onClick={handleBtn}>검색</SearchButton>
                </Journeyli>
              </Journeyul>
            </Journey>
            <SearchBottom>
              <NonstopWrapper>
                <NonstopCheckbox type="checkbox" value="Y" />
                <label htmlFor="nonstop">
                  <span>직항만</span>
                </label>
              </NonstopWrapper>
              <FreeOfChargeWrapper>
                <FreeOfChargebox type="checkbox" />
                <label htmlFor="freeOfCharge">
                  <span>무료 수하물 가능</span>
                </label>
              </FreeOfChargeWrapper>
              <RouteWrapper>
                <span>
                  | 출발/도착 다른 구간
                  <i className="far fa-question-circle" />
                </span>
              </RouteWrapper>
            </SearchBottom>
          </SelectJourney>
        </SearchWrap>
      </SearchSection>
    </SearchMain>
  );
};

const SearchMain = styled.main`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const SearchSection = styled.section`
  width: 100%;
  height: 100%;
  margin-left: 430px;
`;

const SearchWrap = styled.div`
  width: 100%;
  height: 50%;
  margin-bottom: 2em;
`;

const SearchHeader = styled.div`
  display: flex;
  align-items: center;
`;

const SearchHeaderul = styled.ul`
  display: flex;
  height: auto;
  gap: 57em;
  margin-bottom: 17px;
`;

const SearchHeaderdiv = styled.div`
  display: flex;
`;

const SearchHeaderSelector = styled.div`
  height: auto;
`;

const SelectorButton = styled.button`
  width: 9em;
  height: 3em;
  font-size: 15px;
  font-weight: bold;
  color: black;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Reservationlist = styled.div`
  display: flex;
  gap: 2em;
`;

const SelectJourney = styled.div``;

const Journey = styled.div`
  display: flex;
  margin-left: 3em;
`;

const JourneyTitle = styled.legend`
  display: none;
`;

const Journeyul = styled.ul`
  display: flex;
`;

const Journeyli = styled.li`
  display: flex;
  align-items: center;
`;

const JourneyLocation = styled.div`
  border: 2px solid #f0f3f5;
`;

const Journeyinput = styled.input`
  border: none;
  text-align: center;
  font-size: 15px;
  outline: none;
  padding: 0 130px;
`;

const JourneyButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
`;

const JourneyCalendar = styled.div`
  display: flex;
`;

const PassengerReservationButton = styled.button`
  display: flex;
  margin-left: 15px;
  font-size: 15px;
  background-color: white;
  border: none;
  gap: 2em;
  align-items: center;
  cursor: pointer;
`;

const SearchButton = styled.button`
  width: 70px;
  height: 42px;
  margin-left: 15px;
  font-size: 15px;
  font-weight: bold;
  border: 1px solid #2b96ec;
  color: white;
  background-color: #2b96ec;
  cursor: pointer;
`;

const SearchBottom = styled.section`
  display: flex;
  align-items: center;
  margin-top: 1em;
  margin-left: 3em;
`;

const NonstopWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-right: 1em;
`;

const NonstopCheckbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 0.5em;
`;

const FreeOfChargeWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-right: 1em;
`;

const FreeOfChargebox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 0.5em;
`;

const RouteWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
`;

const PassengerFontawesome = styled.div`
  color: #2b96ec;
`;

const RouteTableMainOFF = styled.main`
  display: none;
`;

const ResevationButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #f0f3f5;
  margin-left: 1em;
  width: 260px;
  height: 45px;
`;

export default Searchflight;
