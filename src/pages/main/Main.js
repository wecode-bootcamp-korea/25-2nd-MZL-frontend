import React from 'react';
import styled from 'styled-components';
const Main = () => {
  return (
    <Allcontainer>
      <TopBox>
        <Nav />
        <CategoryBox>
          <div>카테고리</div>
        </CategoryBox>
      </TopBox>
      <div>
        <Header>
          <IntroBar>
            <H1>어디로 떠나세요?</H1>
            <Button>
              <Img
                alt="버튼이미지"
                src="https://dffoxz5he03rp.cloudfront.net/icons/ic_all_md_blue_500.svg"
              />
              <Span>전체 도시 </Span>
            </Button>
          </IntroBar>
        </Header>
        <ImgList>이미지 리스트</ImgList>
        <Ad>광고</Ad>
        <H2>실시간 베스트 상품</H2>
        <FirstList>
          <div>상품 리스트 </div>
        </FirstList>
        <List>최근 본 상품과 함께 보면 좋을 상품</List>
        <SecondList>
          <div>상품 리스트 </div>
        </SecondList>
        <Thema>테마 상품</Thema>
        <ThirdList>
          <div />
        </ThirdList>
      </div>

      <Footer />
    </Allcontainer>
  );
};

const Allcontainer = styled.div``;

const TopBox = styled.div`
  height: 123px;
  background-color: beige;
  border-bottom: 1px solid #dee2e6;
`;

const Nav = styled.div`
  margin: 0 auto;
  width: 1060px;
  height: 72px;
  background-color: brown;
`;

const CategoryBox = styled.div`
  margin: 0 auto;
  width: 1076px;
  height: 50px;
  background-color: greenyellow;
`;

const Header = styled.div`
  height: 122px;
  background-color: skyblue;
`;

const IntroBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 56px 70px 32px;
`;

const H1 = styled.h1`
  text-align: left;
  font-size: 40px;
  color: #343a40;
  font-weight: 600;
`;

const Button = styled.button`
  display: flex;
  padding: 9px;
  width: 118px;
  height: 40px;
  border-radius: 3px;
  background-color: #ffffff;
  border: 1px solid #e6e9ec;
`;

const Span = styled.span`
  display: flex;
  margin-left: 4px;
  letter-spacing: 0px;
  font-size: 14px;
  color: #495056;
  font-weight: bold;
`;

const Img = styled.img`
  display: flex;
  flex-direction: row-reverse;
`;

const ImgList = styled.div`
  height: 353px;
  background-color: violet;
`;

const Ad = styled.div`
  margin-top: 80px;
  margin-left: 130px;
  width: 1270px;
  height: 302px;
  background-color: yellow;
`;

const FirstList = styled.div`
  margin-top: 20px;
  width: 1237px;
  height: 363px;
  background-color: ivory;
`;

const H2 = styled.h2`
  margin-top: 70px;

  font-size: 20px;
  font-weight: 700;
`;

const List = styled.h2`
  margin-top: 70px;
  font-size: 20px;
  font-weight: 700;
`;
const SecondList = styled.div`
  margin-top: 20px;
  width: 1237px;
  height: 363px;
  background-color: pink;
`;

const Thema = styled.h2`
  margin-top: 70px;
  font-size: 20px;
  font-weight: 700;
`;

const ThirdList = styled.div`
  margin-top: 20px;
  width: 1237px;
  height: 363px;
  background-color: blueviolet;
`;

const Footer = styled.div`
  height: 274px;
  background-color: royalblue;
`;
export default Main;
