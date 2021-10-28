const AIR = [
  {
    type: 1,
    filtername: '항공사',
    filterlist: [
      {
        type: 'airline_list',
        value: '대한항공',
        name: '대한항공',
        isChecked: true,
      },
      {
        type: 'airline_list',
        value: '만세항공',
        name: '만세항공',
        isChecked: true,
      },
      {
        type: 'airline_list',
        value: '민국항공',
        name: '민국항공',
        isChecked: true,
      },
    ],
  },
  {
    type: 6,
    filtername: '출발시간',
    filterlist: [
      {
        type: 'time_option',
        value: 'am',
        name: '오전 06:00~12:00',
        isChecked: true,
      },
      {
        type: 'time_option',
        value: 'pm',
        name: '오후 12:00~18:00',
        isChecked: true,
      },
    ],
  },
  {
    type: 10,
    filtername: '좌석종류',
    filterlist: [
      {
        type: 'seat_class',
        value: '비즈니스석',
        name: '비즈니스석',
        isChecked: true,
      },
      { type: 'seat_class', value: '일반석', name: '일반석', isChecked: true },
    ],
  },
];

export default AIR;

// data 구조가 있고
// state ->
// state isChecked
// input checkbox
// fetch makeQueryString()
