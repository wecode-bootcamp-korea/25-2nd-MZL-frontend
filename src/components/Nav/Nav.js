import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Nav() {
  return (
    <>
      <Wrapper>
        <Input>
          <LSide>
            <Link>
              <Logo src="./images/1111.png" />
            </Link>
            <Search />
          </LSide>
          <RSide>
            <Btn to="/">파트너 등록하기</Btn>
            <Btn to="/">로그인</Btn>
            <BtnIn>회원가입</BtnIn>
          </RSide>
        </Input>
        <Navi>
          <List>
            <SLink to="/">항공권</SLink>
          </List>
          <List>
            <SLink to="/">숙소</SLink>
          </List>
          <List>
            <SLink to="/">렌터카</SLink>
          </List>
          <List>
            <SLink to="/">투어.티켓</SLink>
          </List>
          <List>
            <SLink to="/">해외여행스캐너</SLink>
          </List>
          <List>
            <SLink to="/">할인혜택</SLink>
          </List>
          <List>
            <SLink to="/">제주호텔특가</SLink>
          </List>
          <List>
            <SLink to="/">해외패키지</SLink>
          </List>
          <List>
            <SLink to="/">랜선투어</SLink>
          </List>
        </Navi>
        <NavLine />
      </Wrapper>
    </>
  );
}

export default Nav;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 150px;
  width: 100%;
`;
const Logo = styled.img`
  width: 130px;
  margin-right: 20px;
`;
const Input = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  height: 50px;
  margin-top: 10px;
`;

const LSide = styled.header`
  display: flex;
  align-items: center;
`;

const Search = styled.input.attrs({
  placeholder: '  도시나 상품을 검색해보세요',
})`
  width: 290px;
  height: 48px;
  padding-left: 5px;
  background-color: rgba(0, 0, 0, 0.06);
  border-style: none;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

const RSide = styled.header`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 10px;
`;

const Btn = styled(Link)`
  margin-right: 17px;
  padding: 13px 10px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
    border-radius: 3px;
  }
`;

const BtnIn = styled(Link)`
  padding: 10px 30px;
  color: rgba(0, 143, 255, 0.86);
  border: 1px solid rgba(0, 127, 255, 0.54);
  border-radius: 3px;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    background-color: rgba(0, 127, 255, 0.04);
  }
`;

const Navi = styled.ul`
  display: flex;
  width: 65%;
  margin: 30px 0px;
`;

const List = styled.li`
  margin-right: 1.5rem;
  padding-bottom: 12px;
  text-align: center;
  border-bottom: 3px solid rgba(0, 0, 0, 0);

  &:hover {
    border-bottom: 3px solid rgba(0, 127, 255, 0.54);
  }
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  font-weight: 500;
  justify-content: center;
  text-decoration: none;
`;

const NavLine = styled.div`
  position: absolute;
  top: 120px;
  width: 100%;
  border-top: 0.3px solid rgba(0, 0, 0, 0.1);
`;
