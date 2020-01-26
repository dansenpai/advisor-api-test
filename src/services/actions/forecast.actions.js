import Api from '../api';

export const getForecast = () => {
  return async dispatch => {
    try{
      const forecast = await Api.getGeoForecast();

      dispatch({type: 'GET_FORECAST', payload: {forecast: forecast.data}});
    }catch(erro) { throw erro }
  }
}

export const getWeatherNow = () => {
  return async dispatch => {
    try{
      const weather = await Api.getWeatherNow();
      const { name, data, state} = weather;

      dispatch({
        type: 'GET_WEATHER_NOW', payload: { city: name, weather: data, state },
      });
    } catch (erro) { throw erro }
  }
}
