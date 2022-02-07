import ActionTypes from "../action-types/actionTypes";

export const inputAction = (text) => {
  return {
    type: ActionTypes.QUERY_INPUT,
    payload: text
  }
}

export const setWeatherAction = (weather) => {
  return {
    type: ActionTypes.WEATHER_SEARCH,
    payload: weather
  }
}

export const setLoadingAction = (loadingType) => {
  return {
    type: ActionTypes.LOADING,
    payload: loadingType
  }
}
