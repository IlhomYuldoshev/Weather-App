import {setLoadingAction, setWeatherAction} from "../../redux/actions/actions";
import {getCityCoords, getWeatherWithCityCoords} from "../../API/ApiServices";

export const SubmitHandler = async (cityName, dispatch) => {
  dispatch(setLoadingAction(true))
  const coords = await getNormalCityCoords(cityName)
  const weather = await getNormalWeatherData(coords)

  dispatch(setWeatherAction(weather))
  dispatch(setLoadingAction(false))
}

const getNormalCityCoords = async (cityName) => {
  const dataCoords = await getCityCoords(cityName)

  if(dataCoords.length) {
    const normalCoords = {lat: dataCoords[0].lat, lon: dataCoords[0].lon}
    return normalCoords
  }

  return {}
}

export const getNormalWeatherData = async (coords) => {
  if(Object.keys(coords).length === 0) {
    return {isCityNameWrong: true}
  }

  const weatherData = await getWeatherWithCityCoords(coords)
  const normalWeatherData = normalizeWeatherData(weatherData)

  return normalWeatherData
}

export const normalizeWeatherData = (data) => {
  return {
    name: data.name,
    weatherType: data.weather[0].main,
    temperature: Math.round(data.main.temp - 273),
    windSpeed: data.wind.speed,
    iconId: data.weather[0].icon,
    date: +Date.now()
  }
}
