import React, {createContext, useState, useEffect} from 'react';

import {useColorScheme, AppState} from 'react-native';

import {func, api, device} from '../constants';

const {Provider, Consumer} = createContext();

function AppProvider(props) {
  const [weatherPlace, setWeatherPlace] = useState('');
  const [placeSearch, setPlaceSearch] = useState('');
  const [weatherImage, setWeatherImage] = useState('');
  const [weatherHourly, setWeatherHourly] = useState([]);
  const [dayWeather, setDayWeather] = useState('');
  useEffect(() => {
    callApi();
    getHourly();
    getDailyWeather();
  }, []);

  useEffect(() => {
    if (weatherPlace !== '') {
      getWeatherImage();
    }
  }, [weatherPlace]);

  const callApi = async () => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        placeSearch === '' ? 'Athens' : placeSearch
      }&appid=f251d1b16ff7b65444eb9b91b9c5b0c0&units=metric`,
    )
      .then(function (resp) {
        return resp.json();
      }) // Convert data to json
      .then(function (data) {
        setPlaceSearch('');
        setWeatherPlace(data);
      });
  };

  const getHourly = async () => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${
        placeSearch === '' ? 'Athens' : placeSearch
      }&appid=f251d1b16ff7b65444eb9b91b9c5b0c0&units=metric`,
    )
      .then(function (resp) {
        return resp.json();
      }) // Convert data to json
      .then(function (data) {
        setWeatherHourly(data.list.slice(0, 10));
      });
  };

  const getWeatherImage = () => {
    if (weatherPlace?.weather[0]?.id > 800) {
      setWeatherImage(require('../../assets/images/cloud.png'));
    } else if (weatherPlace?.weather[0]?.id === 800) {
      setWeatherImage(require('../../assets/images/clear.png'));
    } else if (
      weatherPlace?.weather[0]?.id > 499 &&
      weatherPlace?.weather[0]?.id < 532
    ) {
      setWeatherImage(require('../../assets/images/rain.png'));
    }
  };
  const getDailyWeather = async () => {
    console.log('wi', placeSearch);
    await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${
        placeSearch === '' ? 'Athens' : placeSearch
      }&appid=f251d1b16ff7b65444eb9b91b9c5b0c0&units=metric`,
    )
      .then(function (resp) {
        return resp.json();
      }) // Convert data to json
      .then(function (data) {
        setDayWeather(data);
      });
  };

  return (
    <Provider
      value={{
        weatherPlace,
        placeSearch,
        weatherHourly,
        dayWeather,
        weatherImage,
        setPlaceSearch,
        callApi,
        getHourly,
        getDailyWeather,
      }}>
      {props.children}
    </Provider>
  );
}

export {AppProvider};

export default Consumer;
