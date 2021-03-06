import React from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import API from '../../config';

const { Kakao } = window;

function Login({ location: { pathname } }) {
  const history = useHistory();
  const isLogin = pathname === '/login';
  const kakaoLogin = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(API.login, {
          method: 'GET',
          headers: { Authorization: authObj.access_token },
        })
          .then(res => res.json())
          .then(res => {
            if (res.message) {
              localStorage.setItem('token', res.token);
              history.push('/');
            }
          });
      },
    });
  };

  return (
    <Container>
      <LoginBox>
        <Icon>π</Icon>
        <Greeting>{isLogin ? 'Welcome!' : 'λ°κ°μ΅λλ€!'}</Greeting>
        <Info>μ¬νμ λͺ¨λ  κ², λ¬΄μ¦λ¦Ό</Info>
        <Kakaoo onClick={kakaoLogin}>
          <BtnText>
            {isLogin ? 'μΉ΄μΉ΄μ€λ‘ κ³μνκΈ°' : 'μΉ΄μΉ΄μ€λ‘ λ°λ‘μμ'}
          </BtnText>
        </Kakaoo>
        <Social>
          <Socialtext>νμ΄μ€λΆ</Socialtext>
          <Socialtext>λ€μ΄λ²</Socialtext>
          <Socialtext>μ΄λ©μΌ</Socialtext>
        </Social>
        <SignIn>
          <SignInText>
            {isLogin ? 'μμ§ νμμ΄ μλμ κ°μ? ' : 'μ΄λ―Έ μμ΄λκ° μμΌμ κ°μ?'}
          </SignInText>
          <SignLink to={isLogin ? '/signup' : '/login'}>
            {isLogin ? 'νμκ°μ' : 'λ‘κ·ΈμΈ'}
          </SignLink>
        </SignIn>
      </LoginBox>
    </Container>
  );
}

export default withRouter(Login);

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin-top: 80px;
  margin-bottom: 250px;
  padding: 60px 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
`;

const Icon = styled.div`
  margin-bottom: 35px;
  font-size: 45px;
`;

const Greeting = styled.div`
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
  cursor: pointer;

  &:hover {
    box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.05);
  }
`;

const BtnText = styled.span`
  margin-top: 4px;
  font-weight: 500;
`;

const Social = styled.div`
  display: flex;
  margin: 20px;
  font-size: 15px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
`;

const Socialtext = styled.div`
  margin: 5px 13px;
`;

const SignIn = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: 13px;
`;

const SignInText = styled.span`
  font-weight: 500;
`;

const SignLink = styled(Link)`
  margin-left: 3px;
  color: rgba(0, 0, 0, 0.8);
`;
