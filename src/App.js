import './App.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage';
import WineryList from "./components/WineryList/WineryList"

function App() {
  const [wineries, setWineries] = useState([]);

  async function getData() {
    const response = await axios.get(`http://localhost:8080/wineries`);
    if(response.data) {
      setWineries(response.data);
    }
    console.log(response.data);
  }
  

  useEffect(() => {
    getData()
  }, []);

  
  return (
    <div className="App">
      < WineryList wineries={wineries} />
       <BrowserRouter>       
        <Routes>
          <Route path="/" element={<Homepage wineries={wineries}/>}/>            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
