import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import One from '../conmponent/one/One';
import Two from '../conmponent/two/Two';

function App() {
  const [green, setGreen] = useState({});

  useEffect( () => {
    const data =async () => {
        const result = await axios.get('https://swapi.dev/api/people/1');
        console.log('result>>>', result.data);
        setGreen(result.data);
    }
    data();
}, []);

  return (
    <div className="AppMy">
      <p>Привіт мене звати</p>
      <One test={green}/>
      <p>Мої дані</p>
      <Two data={green}/>
    </div>
  );
}

export default App;
