import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import AIR from '../Mock/mock';

function SelectFilter({ handleFilter }) {
  return (
    <Container>
      {AIR.map(filter => (
        <React.Fragment key={filter.name}>
          <Line />
          <MainList>
            <div>{filter.filtername}</div>
            <div>
              <i className="fas fa-chevron-up" />
            </div>
          </MainList>
          <SubList>
            {filter.filterlist.map(list => (
              <Checked
                key={list.type}
                list={list}
                handleFilter={handleFilter}
              />
            ))}
          </SubList>
        </React.Fragment>
      ))}
    </Container>
  );
}

function Checked({ list, handleFilter }) {
  const [listItem, setListItem] = useState(list);

  useEffect(() => {
    handleFilter(`${list.type}=${list.value}&`, listItem.isChecked);
  }, [listItem]);

  const checkHandle = useCallback(() => {
    setListItem(item => {
      return { ...item, isChecked: !item.isChecked };
    });
  }, [listItem]);

  return (
    <SelectLine>
      <Box
        type="checkbox"
        id={list.name}
        checked={listItem.isChecked}
        onChange={checkHandle}
      />
      <SelectText htmlFor={list.name}>{list.name}</SelectText>
    </SelectLine>
  );
}

export default SelectFilter;

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  padding: 10px 4px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: #e9edf2;
  }
`;

const SelectAll = styled.div`
  display: flex;
  width: 95%;
  margin-bottom: 10px;
  font-size: 13px;

  span {
    margin-right: 7px;
  }
`;

const SubList = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const SelectLine = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const Box = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  color: red;
  border: 1px solid red;
  border-radius: 3px;
`;

const SelectText = styled.label`
  margin-top: 8px;
  font-size: 13px;
  font-weight: 350;
`;
