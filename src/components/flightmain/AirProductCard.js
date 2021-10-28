import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function AirProductCard({
  img_url,
  start_date,
  end_date,
  price,
  departure_airport,
  arrive_airport,
}) {
  return (
    <Card>
      <Thumbnail to="/main">
        <ThumbnailImg alt={departure_airport} src={img_url} />
        <WishList to="/main">
          <i className="far fa-heart" />
        </WishList>
      </Thumbnail>
      <Info>
        <div>
          <Category>
            <span>{departure_airport} </span>
            <i class="fas fa-long-arrow-alt-right" />
            <span>{arrive_airport} </span>
          </Category>
          <Title>
            <i class="fas fa-plane" />
            <span>{departure_airport} </span>
            <i class="fas fa-long-arrow-alt-right" />
            <span>{arrive_airport} </span>
          </Title>
        </div>
        <InfoBottom>
          <OfferDescription>
            <Review>
              <ReviewText> {start_date}</ReviewText> ~
              <ReviewText> {end_date}</ReviewText>
            </Review>
            <Offer>
              <Price>
                <DiscountPrice>{price}원~</DiscountPrice>
              </Price>
              <Immediately>
                <InstantBooking>11월 출발</InstantBooking>
              </Immediately>
            </Offer>
          </OfferDescription>
        </InfoBottom>
      </Info>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 238px;
  height: 311px;
  margin: 16px 10px 0 10px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
`;

const Thumbnail = styled(Link)`
  position: relative;
`;

const ThumbnailImg = styled.img`
  width: 100%;
  height: 166px;
  border-radius: 4px 4px 0 0;
`;

const WishList = styled.div`
  i {
    position: absolute;
    right: 8px;
    top: 8px;
    color: white;
    z-index: 1;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  height: 145px;
  padding: 15px 0;
  margin-left: 5px;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2px;
  span {
    color: #848c94;
    font-size: 12px;
    margin-right: 5px;
    margin-top: 3px;
  }
  i {
    margin-right: 5px;
  }
`;

const Title = styled.h3`
  color: #343a40;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.47;
  margin-top: 5px;

  i {
    margin-right: 5px;
  }
`;

const InfoBottom = styled.div`
  display: flex;
  align-content: flex-end;
`;

const OfferDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const Review = styled.div`
  display: flex;
  align-content: flex-end;
  margin: 25px 0 8px 0;
  color: #0275d8;
  font-size: 10px;
`;

const Offer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const ReviewText = styled.span`
  margin-left: 1px;
  margin-right: 5px;
  color: #848c94;
`;

const Price = styled.div`
  display: flex;
  flex-direction: flex-start;
`;
const DiscountPrice = styled.div`
  color: #1a1a1a;
  font-size: 12px;
  font-weight: bold;
`;

const Immediately = styled.div`
  display: flex;
  i {
    color: #ffbf00;
    width: 9px;
    font-size: 13px;
  }
`;

const InstantBooking = styled.div`
  margin-left: 80px;
  vertical-align: middle;
  color: #666d75;
  font-size: 12px;
`;

export default AirProductCard;
