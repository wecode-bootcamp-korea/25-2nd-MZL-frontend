import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const Fee = styled.div`
  margin-top: 16px;
  padding: 24px;
  background-color: #fff;
  border-radius: 2px;
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.h3`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 600;
  color: black;
`;

const FeeTable = styled.table`
  border-top: 1px solid #e9ecef;
  width: 100%;
  table-layout: fixed;
`;

const TableHead = styled.thead``;

const TableRow = styled.tr``;

const Item = styled.th`
  padding: 8px 8px 8px 0;
  border-bottom: 1px solid #e9ecef;
  vertical-align: middle;
  text-align: center;
  font-size: 12px;
`;

const TableHeading = styled.th`
  padding: 8px;
  border-bottom: 1px solid #e9ecef;
  vertical-align: middle;
  text-align: center;
  font-size: 12px;
`;

const LastTableHeading = styled.th`
  padding: 8px 0 8px 8px;
  border-bottom: 1px solid #e9ecef;
  vertical-align: middle;
  text-align: center;
  font-size: 12px;
`;

const TableBody = styled.tbody`
  border-bottom: 1px solid #e9ecef;
`;

const ItemDetail = styled.td`
  padding: 16px 8px 16px 0;
  font-size: 13px;
  text-align: center;
`;

const TableDetail = styled.td`
  padding: 16px 8px 16px 8px;
  font-size: 13px;
  text-align: center;
`;

const LastDetail = styled.td`
  padding: 16px 0 16px 8px;
  font-size: 13px;
  text-align: center;
`;

const TableFoot = styled.tfoot`
  vertical-align: baseline;
  line-height: 24px;
`;

const Total = styled.td`
  font-size: 16px;
  padding-top: 16px;
  line-height: 24px;
  font-weight: 700;
`;

const Cost = styled.td`
  font-size: 16px;
  padding: 16px 24px 0 0;
  text-align: right;
  font-weight: 700;
`;

const FareTotal = styled.em`
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 2px;
  text-align: right;
`;
const Unit = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Btn = styled.div`
  text-align: right;
  padding-top: 16px;
  font-weight: 700;
`;

const BookingBtn = styled.button`
  line-height: 24px;
  font-weight: 700;
  padding: 0 10px;
  background-color: #51abf3;
  color: white;
  height: 48px;
  border-radius: 2px;
  font-size: 16px;
  border: none;
  min-width: 120px;
`;

function DetailedFee({ total }) {
  return (
    <Fee>
      <Title> 상세요금 </Title>
      <FeeTable>
        <TableHead>
          <TableRow>
            <Item>항목</Item>
            <TableHeading>항공요금</TableHeading>
            <TableHeading>유류할증료</TableHeading>
            <TableHeading>제세공과금</TableHeading>
            <TableHeading>발권수수료</TableHeading>
            <TableHeading>인원</TableHeading>
            <TableHeading>마이리얼트립할인</TableHeading>
            <LastTableHeading>총요금</LastTableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <ItemDetail>성인</ItemDetail>
            <TableDetail>{(total - 15600).toLocaleString()}</TableDetail>
            <TableDetail>7,700원</TableDetail>
            <TableDetail>8,000원</TableDetail>
            <TableDetail>0원</TableDetail>
            <TableDetail>1명</TableDetail>
            <TableDetail>100원</TableDetail>
            <LastDetail>{total.toLocaleString()}원</LastDetail>
          </TableRow>
        </TableBody>
        <TableFoot>
          <TableRow>
            <Total colSpan="5">총 예상요금</Total>
            <Cost colSpan="2">
              <FareTotal>{total.toLocaleString()}</FareTotal>
              <Unit>원</Unit>
            </Cost>
            <Btn>
              <BookingBtn>예약하기</BookingBtn>
            </Btn>
          </TableRow>
        </TableFoot>
      </FeeTable>
    </Fee>
  );
}

export default DetailedFee;
