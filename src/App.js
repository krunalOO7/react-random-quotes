import axios from 'axios'
import './App.css';
import { useState } from 'react'
function App() {

  const [advice, setAdvice] = useState('Happiness is heart of life')

  const getAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then(function (response) {
      setAdvice(response.data.slip.advice)

    })
    .catch(function (error) {

      console.log(error);
    })
  }

  return (

    <div className="App">
      <div className='card'>
        <h2>{advice}</h2>
        <button onClick={getAdvice}>Take Advice</button>
      </div>
    </div>
  );
}

export default App;
