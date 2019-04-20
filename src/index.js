import axios from 'axios';

window.addEventListener('DOMContentLoaded', function () {
  console.log('NODE_ENV', process.env.NODE_ENV);
  axios.get('/Showtime/LocationMovies.api', {
    params: {
      locationId: 290
    }
  }).then(res => {
    console.log('movie', res.data);
  }).catch(err => {
    console.error(err);
  })
});