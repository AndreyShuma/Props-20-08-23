import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import One from '../conmponent/one/One';
import Two from '../conmponent/two/Two';
import Three from '../conmponent/three/Three';

function App() {
  const [green, setGreen] = useState({});
  const [male, setMale] = useState('man');
  let d=0;

  useEffect( () => {
    const data =async () => {
        const result = await axios.get('https://swapi.dev/api/people/1');
        console.log('result>>>', result.data);
        setGreen(result.data);
    }
    data();
}, []);

  const gender = () => {
    console.log('Запуск функції gender!!!');
    setMale('woman');
  };

  return (
    <div className="AppMy">
      <p>Привіт мене звати</p>
      <One test={green}/> 
      <p>Мої дані</p>
      <Two data={green}/>
      <br/>
      <Three data1={male} data2={gender}/>
    </div>
  );
}

export default App;
