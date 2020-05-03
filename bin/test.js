const axios = require('axios');

console.log('Testing...');

axios.post('http://localhost:5000/api/hobbies', {
  goal: 'career', interest: 'artsy', inclination: 'creative', specifics: 'musical'
}).then(res => {
  console.log(res)
});