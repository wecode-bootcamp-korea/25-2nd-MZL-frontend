import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StarRating from './StarRating';

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
  padding: 10px 15px 15px 15px;
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
  color: #343a40;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.47;
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
  margin-left: 4px;
  color: #848c94;
`;

const Price = styled.div`
  display: flex;
  align-items: flex-end;
`;

const OriginalPrice = styled.div`
  margin-right: 4px;
  color: #848c94;
  font-size: 12px;
  text-decoration: line-through;
`;

const DiscountPrice = styled.div`
  color: #666d75;
  font-size: 14px;
  font-weight: 500;
`;

const Per = styled.div`
  margin-left: 2px;
  color: #848c94;
  font-size: 12px;
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
  margin-left: 2px;
  vertical-align: middle;
  color: #666d75;
  font-size: 12px;
`;

function ProductCard({
  img_url,
  category,
  title,
  star,
  review_count,
  original,
  discount,
}) {
  return (
    <Card>
      <Thumbnail to="/main">
        <ThumbnailImg alt={title} src={img_url} />
        <WishList to="/main">
          <i className="far fa-heart" />
        </WishList>
      </Thumbnail>
      <Info>
        <InfoTop>
          <Category>
            <span>{category} </span>
          </Category>
          <Title>{title}</Title>
        </InfoTop>
        <InfoBottom>
          <OfferDescription>
            <Review>
              <StarRating star={star} />
              <ReviewText> {review_count}</ReviewText>
            </Review>
            <Offer>
              <Price>
                <OriginalPrice>{original} </OriginalPrice>
                <DiscountPrice>{discount} </DiscountPrice>
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
