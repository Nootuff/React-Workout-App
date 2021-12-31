//require('dotenv').config()

import './App.css';
const axios = require('axios').default;

var apitest = process.env.REACT_APP_RAPIDAPI_KEY;


var options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/name/bent-over', //use string template literals here or just put in urlHolder
  headers: {
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    'x-rapidapi-key': apitest  
  }
};

console.log(apitest)

axios.request(options).then(function (response) { //Response appears to be the argument to hold the actual returned data
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});


function App() {
  return (
    <div className="App">
      testing
      <button>Test</button>
    </div>
  );
}

export default App;
