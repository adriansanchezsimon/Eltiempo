import { useState, useEffect } from 'react';
import axios from 'axios';
import { FiGithub, FiInstagram } from 'react-icons/fi';
import './App.css';
import Input from './components/Input';
import InfoDisplay from './components/InfoDisplay';

const App = () => {
  const [distrito, setDistrito] = useState({});
  const [info, setInfo] = useState([]);

  useEffect(() => {
    if (Object.keys(distrito).length !== 0) {
      axios.get(`https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${distrito.id}.json`)
      .then(r => setInfo(r.data.data));
    };
  }, [distrito]);

  const changeDistrito = (item) => {
    setDistrito(item);
  };

  return (
    <div className="App">
      <div className="ImageContainer" />
      <h1>☀️ Meteorologia en Portugal 💦</h1>
      <Input changeDistrito={changeDistrito} />
      <h1>{distrito.name}</h1>
      <InfoDisplay info={info} />
      <div className="footer">
        <strong>© Adrian Sánchez Simón, Marzo 2022</strong>
        <div className="social">
          <a href="https://github.com/JJMarques" target="_blank" rel="noreferrer" aria-label="Github de José Marques"><FiGithub /></a>
          <a href="https://www.instagram.com/adrixn_ss__/" target="_blank" rel="noreferrer" aria-label="Instagram de José Marques"><FiInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default App;
