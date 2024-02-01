import logo from './logo.svg';
import './App.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [winneries, setWinneries] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  async function getData() {
    const response = await axios.get(`http://localhost:8080/wineries`);
    if(response.data) {
      setWinneries(response.data);
    }
    console.log(response.data);
  }
  return (
    <div className="App">
      <ul className='winneries'>
      {
        winneries.map((item, i) => {
          return (
            <li className='winneries__item' key={`item-${i}`}>
              <div className='winneries__item-text'>
                <p>{ item.title}</p>
                <p> {item.address}</p>
              </div>
              <img className='winneries__img' src={item.image} />
            </li>
          );
        })
      }
      </ul>
    </div>
  );
}

export default App;
