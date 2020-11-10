import React, {useEffect, useState} from 'react';
import {ScrollView, View, Image} from 'react-native';
import {
  Button,
  Caption,
  Chip,
  Headline,
  Searchbar,
  Text,
  TextInput,
} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {device} from '../constants';
import WeatherByHour from '../components/WeatherByHour';

const HomeWeather = () => {
  const [weatherHourly, setWeatherHourly] = useState([]);
  const [weatherPlace, setWeatherPlace] = useState('');
  const [weatherImage, setWeatherImage] = useState('');
  const [placeSearch, setPlaceSearch] = useState('');

  useEffect(() => {
    callApi();
    getHourly();
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
  console.log('weatherImage', weatherPlace);
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#5b559d', '#5c6ab1', '#5c83c4', '#5da0d7', '#5ebded']}
      style={{flex: 1}}>
      <View style={{alignItems: 'center'}}>
        <Searchbar
          style={{width: device.width - 50, height: 50}}
          placeholder="Search City"
          onChangeText={(text) => setPlaceSearch(text)}
          value={placeSearch}
          onSubmitEditing={() => {
            callApi(placeSearch);
            getHourly(placeSearch);
          }}
          onIconPress={() => {
            callApi(placeSearch);
            getHourly(placeSearch);
          }}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <Headline style={{marginVertical: 20, color: 'white'}}>
          {weatherPlace.name}
        </Headline>
        {weatherImage !== '' ? (
          <Image style={{height: 130, width: 130}} source={weatherImage} />
        ) : null}
        <Text style={{fontSize: 17, fontWeight: '900', color: 'white'}}>
          {weatherPlace !== '' ? weatherPlace.weather[0]?.description : null}
        </Text>
        <Text style={{fontSize: 70, fontWeight: '900', color: 'white'}}>
          {Math.round(weatherPlace.main?.temp)}&deg;c
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Chip
            icon="water-outline"
            style={{margin: 5}}
            onPress={() => console.log('Pressed')}>
            {weatherPlace.main?.humidity}%
          </Chip>
          <Chip
            icon={
              weatherPlace.main?.temp_min > 0 ? 'weather-sunny' : 'snowflake'
            }
            style={{margin: 5}}
            onPress={() => console.log('Pressed')}>
            {Math.round(weatherPlace.main?.temp_max)}&deg;c /{' '}
            {Math.round(weatherPlace.main?.temp_min)}&deg;c
          </Chip>
          <Chip
            icon="weather-windy"
            style={{margin: 5}}
            onPress={() => console.log('Pressed')}>
            {Math.round(weatherPlace.wind?.speed)} m/s
          </Chip>
        </View>
        <View
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: 2,
            width: device.width - 50,
          }}></View>

        <WeatherByHour data={weatherHourly} />
      </View>
    </LinearGradient>
  );
};
export default HomeWeather;
