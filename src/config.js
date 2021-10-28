const IP = 'http://10.58.5.193:8000';

const API = {
  login: `${IP}/users/login`, //로그인페이지
  products: `${IP}/menus/subproduct`, //상품리스트 (별점있는상품리스트)
  reservations: `${IP}/reservations`, //예약페이지(도착&출발,날짜,승객수,항공사,좌석)
};

export default API;
