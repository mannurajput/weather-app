import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { useState } from 'react';
import axios from 'axios';
import PlaceIcon from '@mui/icons-material/Place';
function App() {
  
 
  return (
    <>
   <div className="container">
        <div className="current-info">

            <div className="date-container">
                <div className="time" id="time">
                    12:30 <span id="am-pm">PM</span>
                </div>
                <div className="date" id="date">
                    Monday, 25 May
                </div>

                <div className="others" id="current-weather-items">
                    <h3 className='nn'>hii nengri</h3>
                    <h2>mausam ane wala hai kam chal rha hai</h2>
                    <img src=''></img>
                    
                </div>
            </div>

            <div className="place-container">
            <input placeholder='search city' type="text" className="input"></input>
                <div className="time-zone" id="time-zone"><span><PlaceIcon /></span>Asia/Kolkata</div>
                <div id="country" className="country">IN</div>
            </div>
        </div>

        
    </div>

    <div className="future-forecast">
        <div className="today" id="current-temp">
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon"/>
            <div className="other">
                <div className="day">Monday</div>
                <div className="temp">Night - 25.6&#176; C</div>
                <div className="temp">Day - 35.6&#176; C</div>
            </div>
        </div>

        <div className="weather-forecast" id="weather-forecast">
            <div className="weather-forecast-item">
                <div className="day">Tue</div>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon"/>
                <div className="temp">Night - 25.6&#176; C</div>
                <div className="temp">Day - 35.6&#176; C</div>
            </div>
            <div className="weather-forecast-item">
                <div className="day">Wed</div>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon"/>
                <div className="temp">Night - 25.6&#176; C</div>
                <div className="temp">Day - 35.6&#176; C</div>
            </div>
            <div className="weather-forecast-item">
                <div className="day">Thur</div>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon"/>
                <div className="temp">Night - 25.6&#176; C</div>
                <div className="temp">Day - 35.6&#176; C</div>
            </div>
            <div className="weather-forecast-item">
                <div className="day">Fri</div>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon"/>
                <div className="temp">Night - 25.6&#176; C</div>
                <div className="temp">Day - 35.6&#176; C</div>
            </div>
            <div className="weather-forecast-item">
                <div className="day">Sat</div>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon"/>
                <div className="temp">Night - 25.6&#176; C</div>
                <div className="temp">Day - 35.6&#176; C</div>
            </div>

        </div>
    </div>
    </>
    
  );
}

export default App;
