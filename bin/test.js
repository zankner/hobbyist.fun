const axios = require('axios');

console.log('Testing...');

axios.get('http://localhost:5000/api/hobbies', { params: {
  goal: 'career', interest: 'artsy', inclination: 'creative', specifics: 'musical',
} }).then((res) => {
  console.log(res);
});
