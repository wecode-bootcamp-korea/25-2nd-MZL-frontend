import React, { useState } from 'react';
import styled from 'styled-components';
import Flightschedule from '../../components/Flightschedule/Flightschedule';

const COUNTRY_LIST = [
  '대한민국',
  '레바논',
  '바레인',
  '사우디아라비아',
  '시리아',
  '아라에미리트',
  '아프가니스탄',
  '예멘',
  '오만',
  '요르단',
  '이라크',
  '이란',
  '이스라엘',
  '카타르',
  '쿠웨이트',
  '일본',
  '중국',
  '미국',
  '캐나다',
  '가나',
  '가봉',
  '괌',
  '그리스',
  '베트남',
  '라오스',
  '네팔',
  '홍콩',
  '호주',
  '브라질',
  '포르투갈',
  '인도',
  '칠레',
  '영국',
  '독일',
  '프랑스',
  '이탈리아',
  '스페인',
  '이집트',
  '헝가리',
  '폴란드',
  '인도네시아',
  '말레이시아',
  '타이',
  '싱가포르',
  '멕시코',
];

const Payment = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    last_name: '',
    first_name: '',
    birth: '',
    nationality: '',
    gender: '',
    agreed: [],
  });

  const handleInputForm = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleCheckbox = e => {
    const { name, checked } = e.target;
    checked
      ? setForm({ ...form, agreed: form.agreed.concat([name]) })
      : setForm({ ...form, agreed: form.agreed.filter(el => el !== name) });
  };
  const handleCheckAll = e => {
    const { checked } = e.target;
    checked
      ? setForm({
          ...form,
          agreed: ['common', 'payment', 'refund', 'private'],
        })
      : setForm({ ...form, agreed: [] });
  };
  const isCheckedCheckbox = name => {
    return form.agreed.includes(name);
  };
  const { name, email, phone, last_name, first_name, birth, agreed } = form;
  const inputValid = Boolean(
    name &&
      email &&
      phone &&
      last_name &&
      first_name &&
      birth &&
      agreed.length === 4
  );
  console.log(inputValid);
  /* fetch(`${api}`, {
      method: 'POST',
      headers: {'Autorization':token},
      body: JSON.stringify({
        name: name,
        email: email,
        phone:phone,
        last_name: last_name,
        first_name:first_name,
        birth:birth
        nationality: nationality,
        gender:'',
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.MESSEGE === 'SUCESS') {
          alret('결제 완료되었습니다.');
        }
      });
  }; */

  return (
    <AllBox>
      <Reservation>예약하기</Reservation>
      <Container>
        <div>
          <FligtInfo>선택한 항공권</FligtInfo>
          <Div>
            <div>
              <Start>
                <Go>가는편</Go>
                <Sentence>
                  {/* <Zone>{depature_airport}</Zone> */}
                  <Arrow
                    alt="화살표"
                    src="https://flights.myrealtrip.com/air/imgs_ibe/mrt/ico/main/ico_fromto_line.png"
                  />
                  {/* <Area>{arrival_airport}</Area>
                  <Day>{start_date}</Day> */}
                </Sentence>
              </Start>

              <Flightschedule />

              <Coming>
                <TheCome>오는편</TheCome>
                <Sentence>
                  {/* <Zone>{deapature_airport}</Zone> */}
                  <Arrow
                    alt="화살표"
                    src="https://flights.myrealtrip.com/air/imgs_ibe/mrt/ico/main/ico_fromto_line.png"
                  />
                  {/* <Area>{arrival_airport}</Area>
                  <Day>{start_date}</Day> */}
                </Sentence>
              </Coming>
              <Flightschedule />

              <TotalPay>
                <TotalAdd>총 상품 금액 </TotalAdd>
                {/* <Won>{total_price}원</Won> */}
              </TotalPay>

              <PriceInfoBtn>
                <Details>요금정보 자세히 보기</Details>
                <Down
                  alt="아래화살표"
                  src="https://flights.myrealtrip.com/air/imgs_ibe/mrt/ico/main/ico_arrow_sm.png"
                />
              </PriceInfoBtn>
            </div>

            <Notice>
              <MiniBox>
                <InfoIcon
                  alt="info아이콘"
                  src="https://flights.myrealtrip.com/air/imgs_ibe/mbl/mrt/ico/ico_Info.png"
                />
                <Now>바로 결제해야 예약이 확정돼요!</Now>
              </MiniBox>
              <Variance>
                예약과 동시에 결제가 진행됩니다. 시간이 경과될 경우 좌석이
                매진되거나 요금이 변동될 수 있습니다.
              </Variance>
            </Notice>

            <Booker>
              <BookerInfo>예약자 정보 </BookerInfo>
              <Emphasis>(필수)</Emphasis>
            </Booker>
            <BookerForm>
              <BookName>
                <ReservationName>예약자 이름 </ReservationName>
                <Input name="name" onChange={handleInputForm} />
              </BookName>
              <BookAdderess>
                <Address>이메일 주소 </Address>
                <Input name="email" onChange={handleInputForm} />
                <Exactly>
                  입력하신 이메일로 예약 확정 및 바우처 메일이 전송됩니다.
                  정확하게 입력해주세요.
                </Exactly>
              </BookAdderess>
              <BookPhoneNum>
                <NumberPhone onChange={handleInputForm}>
                  휴대전화 번호
                </NumberPhone>
                <Input
                  placeholder=" '-를 빼고 입력해주세요.' "
                  name="phone"
                  onChange={handleInputForm}
                />
                <Exactly>
                  스케줄 변동, 결항 등의 상황 발생 시 연락할 수 있는 번호를
                  정확하게 입력해주세요.
                </Exactly>
              </BookPhoneNum>
            </BookerForm>

            <Passenger>
              <PassengerInfo>탑승객 정보</PassengerInfo>
              <span>(필수) </span>
            </Passenger>
            <PassengerForm>
              <Title>
                탑승객<Number> 1 </Number> (성인)
              </Title>

              <Attention>
                예약 후 변경할 수 없으니 신분증과 동일한 정보를 정확하게
                입력해주세요.
              </Attention>
              <LastName>
                <KoreaLast>한글 성</KoreaLast>
                <Input
                  placeholder="홍"
                  name="last_name"
                  onChange={handleInputForm}
                />
              </LastName>
              <FirstName>
                <Name>한글 이름</Name>
                <Input
                  placeholder="길동"
                  name="first_name"
                  onChange={handleInputForm}
                />
              </FirstName>
              <Birth>
                <Date>생년월일</Date>
                <Input
                  placeholder="YYYYMMDD"
                  name="birth"
                  onChange={handleInputForm}
                />
              </Birth>
              <Choice>
                <Gender>성별</Gender>

                <Button name="gender" value="true" onClick={handleInputForm}>
                  남
                </Button>

                <Button name="gender" value="false" onClick={handleInputForm}>
                  여
                </Button>
              </Choice>
              <div>
                <Nationality name="nationality">
                  <Country>국적</Country>
                </Nationality>
                <Select onClick={handleInputForm}>
                  {COUNTRY_LIST.map(country => (
                    <option>{country}</option>
                  ))}
                </Select>
              </div>
            </PassengerForm>
          </Div>
        </div>
        <Pay>
          <PayInfo>결제 정보</PayInfo>
          <OrderPrice>주문금액</OrderPrice>
          {/* <OrderNum> {total_price}원 </OrderNum> */}
          <Add>
            <Total>총 결제 금액 </Total>
            {/* <Num>{total_price}원</Num> */}
          </Add>
          <Terms>
            <Accept> 약관 동의</Accept>
            <Essential>(필수)</Essential>
          </Terms>
          <AllAccept>
            <Check
              type="checkbox"
              name="chackAll"
              checked={form.agreed.length === 4 ? true : false}
              onChange={handleCheckAll}
            />
            <Label>전체 약관 동의</Label>
          </AllAccept>
          <ItemAccpt>
            <FirstList>
              <Check
                type="checkbox"
                name="common"
                checked={isCheckedCheckbox('common')}
                onChange={handleCheckbox}
              />
              <Label>공통 안내사항 동의</Label>
            </FirstList>
            <SecondList>
              <Check
                type="checkbox"
                name="payment"
                checked={isCheckedCheckbox('payment')}
                onChange={handleCheckbox}
              />
              <Label>결제 규정 동의</Label>
            </SecondList>
            <ThirdList>
              <Check
                type="checkbox"
                name="refund"
                checked={isCheckedCheckbox('refund')}
                onChange={handleCheckbox}
              />
              <Label>변경 및 환불 규정 동의</Label>
            </ThirdList>
            <FourthList>
              <Check
                type="checkbox"
                name="private"
                checked={isCheckedCheckbox('private')}
                onChange={handleCheckbox}
              />
              <Label>개인정보 수집 및 이용 동의</Label>
            </FourthList>
          </ItemAccpt>
          <PayBtn
            inputValid={inputValid}
            onClick={() =>
              inputValid ? null : alert('필수 정보 입력해주세요.')
            }
          >
            원 결제하기
          </PayBtn>
        </Pay>
      </Container>
    </AllBox>
  );
};

export default Payment;

const AllBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  margin-left: 20px;
`;

const Reservation = styled.p`
  display: flex;

  margin-right: -145px;
  padding-left: 190px;
  font-size: 27px;
  color: #343a40;
  font-weight: 700;
  font-style: normal;
  line-height: 36px;
`;

const Container = styled.div`
  display: flex;
  margin-right: 80px;
`;

const FligtInfo = styled.p`
  display: flex;
  margin-top: 40px;
  padding-top: 30px;
  padding-bottom: 16px;
  font-size: 22px;
  font-weight: bold;
  color: #343a40;
  border-bottom: 1px solid #adb5bd;
`;

const Start = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const Go = styled.span`
  text-align: center;
  padding-top: 5px;
  width: 45px;
  height: 25px;
  font-size: 12px;
  font-weight: bolder;
  color: #ffffff;
  background-color: #1583db;
`;

const Sentence = styled.p`
  margin-left: 10px;
`;

const Zone = styled.strong`
  font-size: 16px;
  font-weight: 700;
`;

const Arrow = styled.img`
  margin-left: 10px;
`;

const Area = styled.strong`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 700;
`;

const Day = styled.span`
  margin-left: 20px;
  font-size: 15px;
  color: #343a40;
`;

const Coming = styled.li`
  display: flex;
  margin-top: 15px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const TheCome = styled.span`
  text-align: center;
  padding-top: 5px;
  width: 45px;
  height: 25px;
  font-size: 12px;
  font-weight: bolder;
  color: #ffffff;
  background-color: #1583db;
`;

const TotalPay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  padding-top: 25px;
  width: 784px;
  height: 65px;
  border-bottom: 1px solid #adb5bd;
`;

const TotalAdd = styled.span`
  margin-left: 20px;
  font-size: 14px;
  color: #343a40;
`;

const Won = styled.span`
  margin-right: 20px;
  font-size: 18px;
  color: #343a40;
  font-weight: bold;
`;

const PriceInfoBtn = styled.button`
  display: flex;
  transform: translate(80%, 40%);
  margin-bottom: 10px;
  margin-left: 40px;
  width: 248px;
  height: 48px;
  background-color: #ffffff;
  border-radius: 3px;
  border: 1px solid #adb5bd;
`;

const Details = styled.p`
  margin-left: 30px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #343a40;
`;

const Down = styled.img`
  margin-top: 5px;
  margin-left: 2px;
`;

const Notice = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 30px;
  width: 676px;
  height: 79px;
  border: 1px solid white;
  background-color: #f8f9fa;
  border-radius: 4px;
`;

const InfoIcon = styled.img`
  padding-top: -30px;
  margin-top: -5px;
  width: 28px;
  height: 20px;
`;

const MiniBox = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Now = styled.p`
  display: flex;
  margin-left: 10px;

  font-size: 14px;
  font-weight: bold;
`;

const Variance = styled.p`
  font-size: 14px;
  margin-left: 10px;
`;

const Booker = styled.div`
  display: inline;
`;

const BookerInfo = styled.span`
  margin-top: -30px;
  font-size: 22px;
  font-weight: bold;
`;

const Emphasis = styled.span`
  font-size: 14px;
`;

const BookerForm = styled.div`
  margin-top: 10px;
  border-top: 1px solid #adb5bd;
`;

const BookName = styled.div`
  padding-top: 30px;
`;

const ReservationName = styled.label`
  display: block;
  font-size: 14px;
  color: #343a40;
`;

const BookAdderess = styled.div`
  padding-top: 30px;
`;

const Exactly = styled.p`
  margin-top: 10px;
  font-size: 12px;
  color: #848c94;
`;

const Address = styled.label`
  display: block;
  font-size: 14px;
  color: #343a40;
`;
const BookPhoneNum = styled.div`
  padding-top: 30px;
`;

const NumberPhone = styled.label`
  display: block;
  font-size: 14px;
  color: #343a40;
`;

const Passenger = styled.div`
  padding-top: 70px;
`;

const PassengerInfo = styled.span`
  font-size: 22px;
  font-weight: bold;
`;

const PassengerForm = styled.div`
  margin-top: 20px;
  margin-bottom: 80px;
  border-top: 1px solid #adb5bd;
  padding-top: 20px;
`;

const Title = styled.h3`
  display: flex;
  font-weight: bold;
`;

const Attention = styled.p`
  margin-top: 10px;
  color: #848c94;
  font-size: 14px;
`;

const Number = styled.span`
  font-size: 15px;
  color: #51abf3;
`;

const LastName = styled.div`
  margin-top: 20px;
`;

const KoreaLast = styled.label`
  color: #343a40;
  font-size: 14px;
`;

const Input = styled.input`
  display: block;
  margin-top: 10px;
  width: 250px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #adb5bd;
`;

const FirstName = styled.div`
  margin-top: 20px;
`;

const Name = styled.label`
  color: #343a40;
  font-size: 14px;
`;

const Birth = styled.div`
  margin-top: 20px;
  padding-top: 10px;
`;

const Date = styled.label`
  color: #343a40;
  font-size: 14px;
`;

const Choice = styled.div`
  color: #343a40;
`;

const Gender = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #343a40;
  font-size: 14px;
`;

const Button = styled.button`
  width: 124px;
  height: 39px;
  border: 1px solid #adb5bd;
  border-radius: 3px;
  background-color: #ffffff;
`;

const Nationality = styled.div`
  margin-top: 20px;
`;
const Country = styled.label`
  color: #343a40;
  font-size: 14px;
`;

const Select = styled.select`
  margin-top: 10px;
  width: 250px;
  height: 40px;
  border: 1px solid #adb5bd;
  border-radius: 3px;
`;

const Div = styled.div`
  display: block;
`;

const Pay = styled.div`
  position: sticky;
  top: 40px;
  margin-left: 40px;
  margin-top: 30px;
  margin-bottom: 50px;
  height: 655px;
  border: 1px solid #adb5bd;
  border-radius: 3px;
`;

const PayInfo = styled.h3`
  font-size: 22px;
  color: #424242;
  font-weight: 700;
  padding-bottom: 20px;
  padding-top: 50px;
  padding-left: 20px;

  text-align: left;
  width: 100%;
`;

const OrderPrice = styled.p`
  padding: 24px 15px 18px;
  margin-left: 20px;
  font-size: 14px;
  width: 290px;
  height: 52px;
  border-top: 1px solid #adb5bd;
`;

const OrderNum = styled.span`
  font-size: 14px;
`;

const Add = styled.div`
  display: flex;
  justify-content: space-between;
  width: 335px;
  height: 57px;
  background-color: #f5fbff;
  font-weight: bold;
`;

const Total = styled.span`
  padding-left: 20px;
  padding-top: -20px;
  margin-top: 20px;
  color: #2b96ed;
`;

const Num = styled.span`
  margin-top: 20px;
  margin-right: 30px;
  color: #2b96ed;
`;

const Terms = styled.div`
  padding-bottom: 15px;
  padding-top: 20px;
`;

const Accept = styled.span`
  margin-left: 20px;
  font-size: 22px;
`;
const Essential = styled.span``;

const AllAccept = styled.div`
  width: 292px;
  height: 42px;
  padding-top: 10px;

  margin-left: 20px;
  border-top: 1px solid #adb5bd;
`;

const ItemAccpt = styled.div`
  width: 289px;
  height: 210px;
  padding-top: 3px;

  margin-left: 20px;
  margin-top: 10px;
  border: 1px solid #adb5bd;
  border-radius: 4px;
`;

const FirstList = styled.div`
  padding: 10px 0px 10px 8px;
`;

const SecondList = styled.div`
  padding: 10px 8px 30px;
`;

const ThirdList = styled.div`
  padding: 0px 8px 28px;
`;

const FourthList = styled.div`
  padding: 0px 10px 0px 8px;
`;

const Label = styled.label`
  margin-top: -15px;
  margin-left: 10px;
  font-size: 14px;
`;

const Check = styled.input`
  width: 20px;
  height: 20px;
  border: 1px solid #adb5bd;
`;

const PayBtn = styled.button`
  width: 290px;
  height: 48px;
  margin-top: 40px;
  margin-left: 20px;
  padding-left: 10px;
  color: #ffffff;
  background-color: ${props => (props.inputValid ? '#51abf3' : 'grey')};
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  border-color: white;
`;
