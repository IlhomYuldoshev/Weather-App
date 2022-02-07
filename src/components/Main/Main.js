import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getNormalDate} from "../../constants";
import {getWeatherWithCityCoords} from "../../API/ApiServices";
import {normalizeWeatherData} from "../Navbar/navbarFunctions";
import {setLoadingAction, setWeatherAction} from "../../redux/actions/actions";
import Loader from "../Loader/Loader";
import ErrorPage from "../ErrorPage/ErrorPage";

function Main(props) {
  const state = useSelector(state => state.weather)
  const weather = useSelector(state => state.weather.weatherData)
  const dispatch = useDispatch()

  useEffect(async () => {
    const data = await getWeatherWithCityCoords({lat:41.3123363, lon:69.2787079})
    const newWeather = normalizeWeatherData(data)
    dispatch(setWeatherAction(newWeather))
    dispatch(setLoadingAction(false))
  }, [])

  return (
    <>
      {state.isLoading
        ? <Loader/>
        : (
          weather.isCityNameWrong
            ? <ErrorPage/>
            : <main className="main">
              <div className="weather-control">
                <h2 className="title">
                  {weather.weatherType}
                </h2>
                <h3 className="time">
                  {getNormalDate(weather.date)}
                </h3>
                <h4 className="city">
                  {weather.name}
                </h4>
              </div>
              <div className="weather-info">
                <img className="weather-status-img" src={`http://openweathermap.org/img/wn/${weather.iconId}@2x.png`} alt="weather img"/>
                <div className="weather-status">{weather.temperature} C&deg;	</div>
                <div className="weather-other">
                  <div className="wind-status">
                    <img src="./wind.svg" alt="img" className="wind-icon"/>
                    <div className="wind-text">Wind:</div>
                    <div className="wind-value">{weather.windSpeed}m/s</div>
                  </div>
                </div>
              </div>
            </main>
        )
      }
    </>
  );
}

export default Main;
