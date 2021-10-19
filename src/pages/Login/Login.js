import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Kakao } = window;

const Big = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin-top: 45px;
  margin-bottom: 250px;
  padding: 60px 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
`;

const Icon = styled.div`
  margin-bottom: 35px;
  font-size: 45px;
`;

const Hi = styled.div`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 600;
`;

const Info = styled.div`
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
`;

const Kakaoo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  background-color: rgb(255, 228, 54);
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.05);
  }

  span {
    margin-top: 4px;
    font-weight: 500;
  }
`;

const Social = styled.div`
  display: flex;
  margin: 20px;
  font-size: 15px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
  div {
    margin: 5px 13px;
  }
`;

const SignIn = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: 13px;

  span {
    font-weight: 500;
  }
`;

const SignLink = styled(Link)`
  margin-left: 3px;
  color: rgba(0, 0, 0, 0.8);
`;

function Login() {
  // const kakaoLogin = () => {
  //   Kakao.Auth.authorize({
  //     success: function (authObj) {
  //       fetch();
  //     },
  //   });
  // };
  return (
    <Big>
      <LoginBox>
        <Icon>🙈</Icon>
        <Hi>
          <span>Welcome!</span>
        </Hi>
        <Info>
          <span>여행의 모든 것, 마이리얼트립</span>
        </Info>
        <Kakaoo>
          <span>카카오로 계속하기</span>
        </Kakaoo>
        <Social>
          <div>페이스북</div>
          <div>네이버</div>
          <div>이메일</div>
        </Social>
        <SignIn>
          <span>아직 회원이 아니신가요?</span>
          <SignLink>회원가입</SignLink>
        </SignIn>
      </LoginBox>
    </Big>
  );
}

export default Login;
