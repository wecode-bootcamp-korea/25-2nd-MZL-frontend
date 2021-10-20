import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

// color: ${props => props.theme.mainColor};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border-radius: 4px;
  width: 238px;
  height: 311px;
  border: 1px solid #dee2e6;
  margin: 16px 10px 0 10px;
  cursor: pointer;
`;

const Thumbnail = styled(Link)`
  position: relative;
`;

const ThumbnailImg = styled.img`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 100%;
  height: 166px;
`;

const WishList = styled.div`
  i {
    color: white;
    right: 8px;
    position: absolute;
    top: 8px;
    z-index: 1;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  padding: 10px 15px 15px 15px;
  height: 145px;
`;

const InfoTop = styled.div``;

const Category = styled.div`
  display: flex;
  padding-bottom: 2px;
  span {
    color: #848c94;
    font-size: 12px;
  }
`;

const Title = styled.h3`
  font-size: 15px;
  line-height: 1.47;
  color: #343a40;
  font-weight: 600;
`;

const InfoBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-end;
`;

const OfferDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const Review = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-end;
  margin-top: 25px;
  font-size: 10px;
  color: #0275d8;
  margin-bottom: 8px;
`;

const Offer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const ReviewText = styled.span`
  color: #848c94;
  margin-left: 4px;
`;

const Price = styled.div`
  display: flex;
  align-items: flex-end;
`;

const OriginalPrice = styled.div`
  color: #848c94;
  font-size: 12px;
  margin-right: 4px;
  text-decoration: line-through;
`;

const DiscountPrice = styled.div`
  color: #666d75;
  font-size: 14px;
  font-weight: 500;
`;

const Per = styled.div`
  color: #848c94;
  font-size: 12px;
  margin-left: 2px;
`;

const Immediately = styled.div`
  display: flex;
  flex-direction: row;
  i {
    color: #ffbf00;
    width: 9px;
    font-size: 13px;
  }
`;

const InstantBooking = styled.div`
  color: #666d75;
  font-size: 12px;
  margin-left: 2px;
  vertical-align: middle;
`;

function ProductCard() {
  return (
    <Card>
      <Thumbnail to="/main">
        <ThumbnailImg alt="Jeju seaside" src="/images/ProductCard/jeju1.jpg" />
        <WishList to="/main">
          <i className="far fa-heart" />
        </WishList>
      </Thumbnail>
      <Info>
        <InfoTop>
          <Category>
            <span>가이드 투어 </span>
            <span> · </span>
            <span>제주도</span>
          </Category>
          <Title>
            [제주동쪽] 제주도 동부 버스여행 [매일 출발 / 1인도 출발]
          </Title>
        </InfoTop>
        <InfoBottom>
          <OfferDescription>
            <Review>
              ★★★★★ <ReviewText> 1,207</ReviewText>
            </Review>
            <Offer>
              <Price>
                <OriginalPrice>28,900원 </OriginalPrice>
                <DiscountPrice>23,900원 </DiscountPrice>
                <Per>/ 1인 </Per>
              </Price>
              <Immediately>
                <i className="fas fa-bolt" />
                <InstantBooking>즉시확정 </InstantBooking>
              </Immediately>
            </Offer>
          </OfferDescription>
        </InfoBottom>
      </Info>
    </Card>
  );
}
export default ProductCard;
