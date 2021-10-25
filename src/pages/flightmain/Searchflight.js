import React from 'react';
import FindFlightSchedule from './FlightCalendar';
import styled from 'styled-components/macro';

const SearchMain = styled.main`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
`;

const SearchSection = styled.section`
  height: 100%;
`;

const SearchWrap = styled.div`
  width: 100%;
  height: 50%;
  padding: 0 10em;
  margin-bottom: 2em;
`;

const SearchHeader = styled.div`
  display: flex;
  align-items: center;
`;

const SearchHeaderul = styled.ul`
  display: flex;
  height: auto;
  gap: 39em;
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
  padding: 0 60px;
`;

const JourneyButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
`;

const JourneyCalendar = styled.div`
  display: flex;
`;

const PassengerReservationButton = styled.button`
  display: flex;
  width: 250px;
  height: 42px;
  margin-left: 15px;
  font-size: 15px;
  background-color: white;
  border: 2px solid #f0f3f5;
  gap: 1em;
  align-items: center;
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

const ReservationAwesome = styled.div`
  margin-left: 5em;
`;

const SearchBottom = styled.section`
  display: flex;
  align-items: center;
  margin-top: 2em;
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
const Searchflight = () => {
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
                    <Journeyinput placeholder="출발지가 어딘가요?" />
                    <JourneyButton>
                      <i class="fas fa-arrows-alt-h" />
                    </JourneyButton>
                    <Journeyinput placeholder="도착지가 어딘가요?" />
                  </JourneyLocation>
                  <JourneyCalendar>
                    <FindFlightSchedule />
                  </JourneyCalendar>
                  <PassengerReservationButton>
                    <PassengerFontawesome>
                      <i class="far fa-user" />
                    </PassengerFontawesome>
                    승객 1명, 일반석
                    <ReservationAwesome>
                      <i class="fas fa-chevron-down" />
                    </ReservationAwesome>
                  </PassengerReservationButton>
                  <SearchButton>검색</SearchButton>
                </Journeyli>
              </Journeyul>
            </Journey>
            <SearchBottom>
              <NonstopWrapper>
                <NonstopCheckbox type="checkbox" value="Y" />
                <label for="nonstop">
                  <span>직항만</span>
                </label>
              </NonstopWrapper>
              <FreeOfChargeWrapper>
                <FreeOfChargebox type="checkbox" />
                <label for="freeOfCharge">
                  <span>무료 수하물 가능</span>
                </label>
              </FreeOfChargeWrapper>
              <RouteWrapper>
                <span>
                  | 출발/도착 다른 구간
                  <i class="far fa-question-circle" />
                </span>
              </RouteWrapper>
            </SearchBottom>
          </SelectJourney>
        </SearchWrap>
      </SearchSection>
    </SearchMain>
  );
};

export default Searchflight;
