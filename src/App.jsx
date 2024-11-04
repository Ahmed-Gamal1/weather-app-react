import React, { useState } from 'react'
import axios from 'axios'
import Weather from './components/Weather'
import './index.css';

const App = () => {

  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const [bgClass, setBgClass] = useState("bg-gradient-to-br from-blue-500 to-purple-600")

  const API_KEY = "5ae38e7b646c88f836f955621e460c93"

  const searchLocation = (event) => {
     if(event.key === "Enter") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
      axios.get(url)
        .then((response) => {
          setData(response.data)
          console.log(response.data)
          const weatherCondition = response.data.weather[0].main.toLowerCase();
          if (weatherCondition.includes("clear")) {
            setBgClass("bg-gradient-to-br from-yellow-400 to-orange-600");
          } else if (weatherCondition.includes("cloud")) {
            setBgClass("bg-gradient-to-br from-gray-400 to-gray-600");
          } else if (weatherCondition.includes("rain")) {
            setBgClass("bg-gradient-to-br from-blue-400 to-gray-600");
          } else {
            setBgClass("bg-gradient-to-br from-blue-500 to-purple-600");
          }
        })
        .catch((error) => {
          console.error("Error fetching the weather data:", error);
        });
      setLocation("")
     }
  }
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${bgClass}`}>
      
      <div className="text-center mb-6">
        <input type="text" className='py-3 px-6 w-[400px] text-lg rounded-full border border-gray-300 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-transform duration-300 transform hover:scale-105 shadow-lg' placeholder='Enter Location' 
        value={location}
         onChange={(event) => setLocation(event.target.value)}
        onKeyDownCapture={searchLocation}
        />
      </div>
      <Weather WeatherData={data}/>
    </div>
  )
}

export default App