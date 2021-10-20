import React from 'react';

function StarRating({ star }) {
  if (star > 5 || star < 1) throw Error(`out of number range`);
  else return '★'.repeat(star);
}
export default StarRating;
