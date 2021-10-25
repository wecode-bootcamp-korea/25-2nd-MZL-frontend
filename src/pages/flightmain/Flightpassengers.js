import React from 'react';
import styled from 'styled-components/macro';

const PassengersMain = styled.main`
  position: absolute;
  background-color: #f1f1f1;
`;

const PassengersGrades = styled.div`
  height: auto;
  line-height: normal;
`;

const PassengersGradesh1 = styled.h1`
  line-height: 20px;
  padding: 20px 24px 0px 24px;
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 1em;
`;

const PassengersSelectSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const PassengersSelectButton = styled.div`
  display: flex;
  flex-direction: column;
`;

const PassengersDl = styled.dl`
  display: flex;
  align-items: center;
  gap: 13em;
  padding: 1em 0;
  margin-bottom: 1em;
`;

const PassengersDt = styled.dt`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  font-size: 18px;
  padding: 0 24px;
`;

const PassengersDd = styled.dd`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-right: 2em;
`;

const PassengersButton = styled.button`
  font-size: 18px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #2b96ec;
`;

const PassengersSpan = styled.span`
  font-size: 18px;
`;

const PassengersGradesSelect = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 1.5em 0;
`;

const PassengersGradesSelectUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 3em;
`;

const PassengersGradesSelectLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const PassengersInputDiv = styled.div`
  font-size: 18px;
`;

const PassengersInput = styled.input`
  margin-right: 1em;
`;
const passengers = () => {
  return (
    <PassengersMain>
      <PassengersGrades>
        <PassengersGradesh1>인원 & 좌석등급</PassengersGradesh1>
      </PassengersGrades>
      <PassengersSelectSection>
        <PassengersSelectButton>
          <PassengersDl>
            <PassengersDt>
              성인<PassengersSpan>만 12세 이상</PassengersSpan>
            </PassengersDt>
            <PassengersDd>
              <PassengersButton>
                <i class="fas fa-minus-circle" />
              </PassengersButton>
              <PassengersSpan>1</PassengersSpan>
              <PassengersButton>
                <i class="fas fa-plus-circle" />
              </PassengersButton>
            </PassengersDd>
          </PassengersDl>
          <PassengersDl>
            <PassengersDt>
              소아<PassengersSpan>만 12세 미만</PassengersSpan>
            </PassengersDt>
            <PassengersDd>
              <PassengersButton>
                <i class="fas fa-minus-circle" />
              </PassengersButton>
              <PassengersSpan>1</PassengersSpan>
              <PassengersButton>
                <i class="fas fa-plus-circle" />
              </PassengersButton>
            </PassengersDd>
          </PassengersDl>
          <PassengersDl>
            <PassengersDt>
              유아<PassengersSpan>24개월 미만</PassengersSpan>
            </PassengersDt>
            <PassengersDd>
              <PassengersButton>
                <i class="fas fa-minus-circle" />
              </PassengersButton>
              <PassengersSpan>1</PassengersSpan>
              <PassengersButton>
                <i class="fas fa-plus-circle" />
              </PassengersButton>
            </PassengersDd>
          </PassengersDl>
        </PassengersSelectButton>
        <PassengersGradesSelect>
          <PassengersGradesSelectUl>
            <PassengersGradesSelectLi>
              <PassengersInputDiv>
                <PassengersInput type="radio" />
                <span>일반석</span>
              </PassengersInputDiv>
              <PassengersInputDiv>
                <PassengersInput type="radio" />
                <span>프리미엄 일반석</span>
              </PassengersInputDiv>
            </PassengersGradesSelectLi>
            <PassengersGradesSelectLi>
              <PassengersInputDiv>
                <PassengersInput type="radio" />
                <span>비즈니스석</span>
              </PassengersInputDiv>
              <PassengersInputDiv>
                <PassengersInput type="radio" />
                <span>일등석</span>
              </PassengersInputDiv>
            </PassengersGradesSelectLi>
          </PassengersGradesSelectUl>
        </PassengersGradesSelect>
      </PassengersSelectSection>
    </PassengersMain>
  );
};

export default passengers;
