import React from 'react';

const Weather = ({ WeatherData }) => {
  const getMoodMessage = (condition) => {
    switch (condition) {
      case 'Clear':
        return "It's a sunny day! Perfect for a walk!";
      case 'Clouds':
        return "A bit cloudy, but still a nice day!";
      case 'Rain':
        return "Looks like rain, don't forget your umbrella!";
      case 'Snow':
        return "It's snowing! Time for some fun in the snow!";
      default:
        return "Weather is unpredictable, stay prepared!";
    }
  };

  return (
    <div>
      {WeatherData.weather && WeatherData.weather.length > 0 ? (
        <div className={`max-w-md w-full bg-white shadow-lg rounded-lg m-auto relative p-6 mt-4 transition-transform transform animate-fade-in hover:scale-105 hover:shadow-xl border border-gray-200`}>
          <div className="flex justify-between items-center">
            <div className='flex flex-col'>
              <p className='text-xl font-semibold text-gray-800'>
                {WeatherData.name}, {WeatherData.sys.country}
              </p>
              <p className='text-sm text-gray-600'>
                {WeatherData.weather[0].description}
              </p>
              <h1 className='text-6xl font-bold mt-2 text-blue-600'>
                {WeatherData.main.temp.toFixed()}°C
              </h1>
            </div>
            <div className="relative">
              <img
                src={`https://openweathermap.org/img/wn/${WeatherData.weather[0].icon}@2x.png`}
                alt=""
                className='w-[120px]'
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600">
              <p>Feels like</p>
              <p className='font-bold'>{WeatherData.main.feels_like.toFixed()}°C</p>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <p>Humidity</p>
              <p className='font-bold'>{WeatherData.main.humidity} %</p>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <p>Wind Speed</p>
              <p className='font-bold'>{WeatherData.wind.speed.toFixed()} KPH</p>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <p>Pressure</p>
              <p className='font-bold'>{WeatherData.main.pressure} hPa</p>
            </div>
          </div>
          <p className="mt-4 text-center text-lg text-gray-700">{getMoodMessage(WeatherData.weather[0].main)}</p>
        </div>
      ) : (
        <p className="text-white text-lg">Please enter a location to get the weather.</p>
      )}
    </div>
  );
};

export default Weather;