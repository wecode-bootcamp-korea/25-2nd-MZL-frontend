<<<<<<< HEAD
const IP = 'http://3.34.96.53:8000';
=======
// const IP = 'http://10.58.6.180:8000';
const IP = 'http://localhost:3000';
>>>>>>> a752012 ([modify]메인페이지 레이아웃 수정)

const API = {
  login: `${IP}/users/login`, //로그인페이지
  products: `${IP}/menus/subproduct`, //상품리스트 (별점있는상품리스트)
  reservations: `${IP}/reservations`, //예약페이지(도착&출발,날짜,승객수,항공사,좌석)
  cart: `${IP}/cart`, //장바구니
};

export default API;
