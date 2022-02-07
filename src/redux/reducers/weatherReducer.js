import ActionTypes from "../action-types/actionTypes";

const initialState = {
  inputValue: "",
  weatherData: {},
  isLoading: true
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.QUERY_INPUT:
      return {...state, inputValue: action.payload}
    break
    case ActionTypes.WEATHER_SEARCH:
      return {...state, weatherData: action.payload}
    break
    case ActionTypes.LOADING:
      return {...state, isLoading: action.payload}
    default:
      return state
  }
  return state
}

export default weatherReducer
