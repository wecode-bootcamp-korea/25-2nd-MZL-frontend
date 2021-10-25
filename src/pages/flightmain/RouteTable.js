import React from 'react';
import styled from 'styled-components';

const SectionTitle = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-left: 2em;
  margin-bottom: 1.5em;
`;

const RouteTableMain = styled.main`
  padding: 28px 32px 32px;
`;

const RouteTableSearchWrapper = styled.div`
  display: flex;
  border: 2px solid #f0f3f5;
  margin-left: 2.7em;
  margin-right: 103.3em;
`;

const RouteTableFirstSection = styled.section`
  padding: 28px 32px 32px;
`;

const RouteTableInput = styled.input`
  padding: 0.85em 33.5em 1em 0.4em;
  margin-left: 0.3em;
  border: none;
`;

const RouteButton = styled.button`
  padding: 0.75em 3em 0.8em 3em;
  border: none;
  outline: none;
  background-color: #2b96ec;
  color: #fff;
  font-size: 15px;
  border-radius: 3%;
  cursor: pointer;
`;

const LocationTable = styled.table`
  border-top: 2px solid #f0f3f5;
  line-height: 3;
  margin: 2em 0 2em 5em;

  th {
    vertical-align: middle;
    padding: 3px 50px 0 10px;
    font-weight: 600;
  }

  td {
    padding: 3px 30px;
    cursor: pointer;
    color: #343a40;
  }
`;

const LocationTableTr = styled.tr`
  border-bottom: 2px solid #f0f3f5;
  text-align: center;
`;

const RouteSelectSection = styled.section`
  margin-top: 3em;
`;

const RouteSelectPtag = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-left: 4em;
`;

const FirstTitleFlex = styled.div`
  display: flex;
  gap: 38em;
`;

const FirstTitleFontawsome = styled.div`
  display: flex;
  cursor: pointer;
`;

const RouteTable = () => {
  return (
    <RouteTableMain>
      <RouteTableFirstSection>
        <FirstTitleFlex>
          <div>
            <SectionTitle>도시 선택</SectionTitle>
          </div>
          <FirstTitleFontawsome>
            <i class="fas fa-times" />
          </FirstTitleFontawsome>
        </FirstTitleFlex>
        <RouteTableSearchWrapper>
          <RouteTableInput placeholder="도시명을 입력하세요" />
          <RouteButton>검색</RouteButton>
        </RouteTableSearchWrapper>
      </RouteTableFirstSection>
      <RouteSelectSection>
        <RouteSelectPtag>주요도시 바로 선택</RouteSelectPtag>
        <LocationTable>
          <LocationTableTr>
            <th rowspan="3">국내</th>
            <td>제주</td>
            <td>김포</td>
            <td>부산</td>
            <td>광주</td>
          </LocationTableTr>
          <LocationTableTr>
            <td>여수</td>
            <td>광주</td>
            <td>대구</td>
            <td>양양</td>
          </LocationTableTr>
          <LocationTableTr>
            <td>군산</td>
            <td>울산</td>
            <td>포항</td>
            <td>인천</td>
          </LocationTableTr>
          <LocationTableTr>
            <th rowspan="2">아시아</th>
            <td>다낭</td>
            <td>방콕</td>
            <td>세부</td>
            <td>대만/타오위안</td>
          </LocationTableTr>
          <LocationTableTr>
            <td>코타키나발루</td>
            <td>나트랑/캄란</td>
            <td>싱가포르</td>
            <td>팡라오</td>
          </LocationTableTr>
          <LocationTableTr>
            <th>중국</th>
            <td>북경</td>
            <td>상해/푸동</td>
            <td>청도</td>
            <td>성도</td>
          </LocationTableTr>
          <LocationTableTr>
            <th rowspan="2">일본</th>
            <td>도쿄/나리타</td>
            <td>도쿄/하네다</td>
            <td>오사카/간사이</td>
            <td>오키나와</td>
          </LocationTableTr>
          <LocationTableTr>
            <td>후쿠오카</td>
            <td>키타큐슈</td>
            <td>삿포로/치토세</td>
            <td>나고야</td>
          </LocationTableTr>
          <LocationTableTr>
            <th rowspan="2">미주</th>
            <td>로스엔젤레스</td>
            <td>하와이/호놀룰루</td>
            <td>뉴욕</td>
            <td>토론토</td>
          </LocationTableTr>
          <LocationTableTr>
            <td>벤쿠버</td>
            <td>시카고/오헤어</td>
            <td>샌프란시스코</td>
            <td>라스베가스</td>
          </LocationTableTr>
          <LocationTableTr>
            <th rowspan="2">유럽</th>
            <td>블라디보스토크</td>
            <td>파리</td>
            <td>런던</td>
            <td>로마</td>
          </LocationTableTr>
          <LocationTableTr>
            <td>프랑크푸르트</td>
            <td>프라하</td>
            <td>바르셀로나</td>
            <td>이스탄불</td>
          </LocationTableTr>
        </LocationTable>
      </RouteSelectSection>
    </RouteTableMain>
  );
};

export default RouteTable;
