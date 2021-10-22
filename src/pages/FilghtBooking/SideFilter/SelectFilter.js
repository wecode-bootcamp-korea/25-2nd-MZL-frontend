import React from 'react';
import styled from 'styled-components';

const AIR_LINE = [
  { id: 1, name: '대한항공' },
  { id: 2, name: '아시아나항공' },
  { id: 3, name: '진에어' },
  { id: 4, name: '에어부산' },
  { id: 5, name: '티웨이항공' },
  { id: 6, name: '제주항공' },
  { id: 7, name: '에어서울' },
];

function SelectFilter() {
  return (
    <Container>
      <Line />
      <MainList>
        <div>항공사</div>
        <div>
          <i class="fas fa-chevron-up"></i>
        </div>
      </MainList>
      <SubList>
        <SelectLine>
          <Box type="checkbox" id="xx"></Box>
          <SelectText for="xx">아시아나항공</SelectText>
        </SelectLine>
      </SubList>
    </Container>
  );
}

export default SelectFilter;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12%;
  margin-right: 50px;
  margin-top: 12px;
`;

const Line = styled.div`
  width: 90%;
  border-top: 0.5px solid #d2d4d6;
`;

const MainList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 3% 0;
  padding: 10px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: #e9edf2;
  }
`;

const SubList = styled.div`
  width: 100%;
`;

const SelectLine = styled.div`
  display: flex;
`;

const Box = styled.input.attrs('checkbox')`
  width: 40px;
  margin-right: 8px;
`;

const SelectText = styled.label`
  margin-top: 4px;
  font-size: 15px;
  font-weight: 350;
`;
