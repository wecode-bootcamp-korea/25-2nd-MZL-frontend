import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <Warp>
    <Guest>
      <Tit>고객센터 운영안내</Tit>
      <GuestIn>
        <span>평일(채팅/유선) : 09:00-18:00 (12시~13시 제외)</span>
        <span>주말/공휴일 : 채팅 상담만 가능</span>
        <span>※ 항공권 환불/변경 : 09:00-17:00까지 접수 가능</span>
        <span>유선상담 : 1670-8208</span>
      </GuestIn>
      <Onetoone>
        <span>1:1 채팅상담</span>
      </Onetoone>
    </Guest>
    <FooterR>
      <Intro>
        <span>소개</span>
        <span>회사소개</span>
        <span>채용</span>
        <span>공고</span>
      </Intro>
      <Intro>
        <span>파트너</span>
        <span>파트너 등록하기</span>
        <span>Affiliate 프로그램</span>
        <span>리얼파트너</span>
        <span>파트너 블로그</span>
      </Intro>
      <Intro>
        <span>지원</span>
        <span>자주 묻는 질문</span>
        <span>최저가 보장제</span>
      </Intro>
    </FooterR>
  </Warp>
);

export default Footer;

const Warp = styled.footer`
  display: flex;
  justify-content: space-between;
  height: 200px;
  margin-bottom: 50px;
  padding: 50px 300px;
  border-top: 0.5px solid rgba(0, 0, 0, 0.09);
`;

const Guest = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tit = styled.span`
  font-size: 17px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
`;
const GuestIn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  span {
    margin-bottom: 6px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 13px;
  }
`;

const Onetoone = styled.div`
  display: flex;
  justify-content: center;
  width: 120px;
  padding: 13px 6px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.05);
  }
`;

const FooterR = styled.div`
  display: flex;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  span {
    margin-bottom: 15px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);

    :nth-child(1) {
      font-size: 14px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;
