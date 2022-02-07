import axios from "axios";
import {api} from "./Api";

export const getCityCoords = async (cityName) => {
  const data = await axios.get(`${api.baseUrl}/geo/1.0/direct?q=${cityName}&limit=1&appid=${api.key}`)
    .then(res => res.data)
  return data
}

export const getWeatherWithCityCoords = async ({lat, lon}) => {
  const data = await axios.get(`${api.baseUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api.key}`)
    .then(res => res.data)
  return data
}

//
// const state = {
//   cityName: "Tashkent",
//   weather: {
//     cityName: "Tashkent",
//     weatherType: "Rain",
//     temperature: fn(toCelciy),
//     windSpeed: "2.1",
//     iconId: "10d"
//   }
// }

/*
  const Coords = [
    {
      name: "Tashkent",
      lat: 41.3123363,
      lon: 69.2787079
    }
  ]
 */

// image example http://openweathermap.org/img/wn/10d@2x.png
