import './App.css';
import React, { useState, useEffect } from 'react';
import Container from './components/container';
import WeatherDefault from './defaultWeather.json';

function App() {

  const key = "b298e2a06932c57304938202e4cfa835";

  const [weatherInfo, setWeatherInfo] = useState(WeatherDefault);
  const [gradesType, setGradesType] = useState("metric");
  const [grades, setGrades] = useState("C");
  const [velocityType, setVelocityType] = useState("meters / second");

  function getData() {
    navigator.geolocation.watchPosition((position) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${key}&units=${gradesType}`)
        .then((response) => response.json())
        .then((data) => setWeatherInfo(data));
      })
  }

  function setBackground(code) {
    
    let url = "";

    switch (code) {
      case '01d':
        url = "https://images.financialexpress.com/2020/04/sky1200.jpg?w=1200&h=800&imflag=true";
        break;

        case '01n':
          url = "https://i.pinimg.com/originals/fd/82/2a/fd822a175c882a4856fa9a95a450d829.jpg"
          break;

        case '02d':
        url = "https://s7d2.scene7.com/is/image/TWCNews/1031_nc_partly_cloudy_3";
        break;

        case '02n':
          url = "http://www.drahtphotography.com/wp-content/uploads/2015/05/sampleIMG_3642.jpg";
          break;
  
        case '03d':
        url = "https://eldominicano.do/wp-content/uploads/2020/04/0ee069f4-cielo.jpg";
        break;

        case '03n':
          url = "https://www.freeride.se/jacobwester/wp-content/uploads/2009/08/d1.jpg";
          break;
  
        case '04d':
        url = "http://1.bp.blogspot.com/-LEwryHQ6ahU/UXDK0seaytI/AAAAAAAARag/W1Pl69_RwD8/s1600/Broken+Clouds+with+Sunshine+Wallpaper.jpg";
        break;

        case '04n':
          url = "https://i.pinimg.com/originals/d6/81/1c/d6811ccdf1423b5797d8e598ff56056d.jpg";
          break;
  
        case '09d':
        url = "https://hackerbits.com/wp-content/uploads/2017/09/What_is_the_difference_between_rain_and_showers-862x461.jpg";
        break;

        case '09n':
        url = "https://i.pinimg.com/originals/98/26/ae/9826aed052d05f6e634829370bbc10ab.jpg";
        break;

        case '10d':
        url = "https://s7d2.scene7.com/is/image/TWCNews/heavy_rain_jpg-2";
        break;

        case '10n':
          url = "https://hdwallpaperim.com/wp-content/uploads/2017/08/31/149042-rain-night-cityscape-city.jpg";
          break;
  
        case '11d':
        url = "https://www.stormgeo.com/assets/ArticleImages/thunderstorm-flipped__FocusFillWzQyODgsMjcwMCwieSIsNzRd.jpg";
        break;

        case '11n':
          url = "https://www.stormgeo.com/assets/ArticleImages/thunderstorm-flipped__FocusFillWzQyODgsMjcwMCwieSIsNzRd.jpg";
          break;
  
        case '13d':
        url = "https://static.vecteezy.com/system/resources/previews/000/784/693/non_2x/snowy-winter-scene-photo.jpg";
        break;

        case '13n':
          url = "https://p4.wallpaperbetter.com/wallpaper/734/899/618/snow-road-night-winter-wallpaper-preview.jpg";
          break;
  
        case '50d':
        url = "https://www.advancednanotechnologies.com/wp-content/uploads/2019/05/iStock-1055906130-1080x675.jpg";
        break;

        case '50n':
        url = "https://i1.wp.com/www.victorbezrukov.com/wp-content/gallery/night-walks/Foggy_misty_night_by_Victor_Bezrukov-2.JPG?w=860";
        break;

        default:
          url = "";
    }

    return url;
  }


  const changeGrades = () => {
    setGradesType(gradesType==="imperial"? "metric" : "imperial");
    setGrades(gradesType==="imperial"?"F":"C");
    setVelocityType(gradesType==="imperial"?"miles / hour":"meters / second");
    getData();
  }

  getData();

  useEffect(getData);

  const backgroundUrl = setBackground(weatherInfo.weather[0].icon);

  return (
    <div className="App" style={{backgroundImage: `url(${backgroundUrl})`}}>
     <Container weather={weatherInfo.weather[0].description} temperature={weatherInfo.main.temp} grades={grades} city={weatherInfo.name} country={weatherInfo.sys.country} icon={weatherInfo.weather[0].icon} windSpeed={weatherInfo.wind.speed} velocityType={velocityType} clouds={weatherInfo.clouds.all} changeGrades={changeGrades} pressure={weatherInfo.main.pressure}/>
    </div>
  );
}

export default App;
