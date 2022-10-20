import React, { useState } from 'react';
import axios from 'axios';
import Input from "@mui/material/Input"
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box'


// import { fetchWeather } from './api/fetchWeather';
// import './App.css';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'b725f2c6d5cf1140863cf89ae6f00eb0';

const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
        }
    }

    return (
      <Box sx={{ display: "flex", maxWidth: 560 }}>
        <div className="main-container">
            <Input sx={{':before': { borderBottomColor: 'white' },

    ':after': { borderBottomColor: 'white' },
}} type="text" className="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
            {weather.main && (
                <div className="city">
                    <Typography variant="h6" style={{color:"#F0FFFF"}} className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </Typography>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <Typography variant="h5"style={{color:"#F0FFFF"}}>{weather.weather[0].description}</Typography>
                    </div>
                </div>
            )}
        </div>
        </Box>
    );
}

export default App;