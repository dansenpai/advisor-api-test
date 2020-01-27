import axios from 'axios';
import {forecastRequest, weatherRequest} from './mock';
import AsyncStorage from '@react-native-community/async-storage';
import Geolocation from '@react-native-community/geolocation';

const TEST = true;
// TODO ADD URLS TO .ENV
const BASE_FORECAST_URL =
  'http://apiadvisor.climatempo.com.br/api/v1/forecast/geo/days/15?';
const WEATHER_NOW_URL =
  'http://apiadvisor.climatempo.com.br/api/v1/weather/locale/4970/current?';
// TODO NEED TO CHANGE API_KEY
const API_KEY = 'token=e2c4faf2f077aea00d49728b4ba737d5';

export default {
  getGeoForecast: () => {
    if (TEST) return forecastRequest;

    Geolocation.getCurrentPosition(async geo => {
      const latitude = geo.coords.latitude;
      const longitude = geo.coords.longitude;

      const PARAMS = `latitude=${latitude}&longitude=${longitude}&`;

      try {
        const response = await axios.get(BASE_FORECAST_URL + PARAMS + API_KEY);

        await AsyncStorage.setItem('forecast', JSON.stringify(response.data));

        return response.data;
      } catch (e) {
        const cache = await AsyncStorage.getItem('forecast');

        return JSON.parse(cache);
      }
    });
  },
  getWeatherNow: async () => {
    if (TEST) return weatherRequest;

    const response = await axios.get(WEATHER_NOW_URL + API_KEY);

    try {
      await AsyncStorage.setItem('wheater', JSON.stringify(response.data));

      return response.data;
    } catch (e) {
      const cache = await AsyncStorage.getItem('wheater');

      return JSON.parse(cache);
    }
  },
};
