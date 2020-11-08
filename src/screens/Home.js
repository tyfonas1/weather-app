import React, {useEffect, useState} from 'react';
import {ScrollView, View, Image} from 'react-native';
import {Button, Headline, Text, TextInput} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {device} from '../constants';
import WeatherByHour from '../components/WeatherByHour';

const HomeWeather = () => {
  const [weatherHourly, setWeatherHourly] = useState([]);
  const [weatherPlace, setWeatherPlace] = useState([]);
  const [placeSearch, setPlaceSearch] = useState('');
  useEffect(() => {
    callApi();
    getHourly();
  }, []);

  const callApi = async () => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        placeSearch === '' ? 'Athens' : placeSearch
      },CA&appid=f251d1b16ff7b65444eb9b91b9c5b0c0&units=metric`,
    )
      .then(function (resp) {
        return resp.json();
      }) // Convert data to json
      .then(function (data) {
        setWeatherPlace(data);
      });
  };

  const getHourly = async () => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${
        placeSearch === '' ? 'Athens' : placeSearch
      },CA&appid=f251d1b16ff7b65444eb9b91b9c5b0c0&units=metric`,
    )
      .then(function (resp) {
        return resp.json();
      }) // Convert data to json
      .then(function (data) {
        setWeatherHourly(data.list.slice(0, 10));
      });
  };
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#5b559d', '#5c6ab1', '#5c83c4', '#5da0d7', '#5ebded']}
      style={{flex: 1}}>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <TextInput
          label="Search"
          value={placeSearch}
          onChangeText={(text) => setPlaceSearch(text)}
          style={{width: device.width - 50, height: 40}}
        />
        <Button
          style={{width: device.width - 50}}
          mode="text"
          onPress={() => callApi(placeSearch)}>
          <Text style={{color: 'white'}}>Search</Text>
        </Button>
      </View>

      <View style={{alignItems: 'center'}}>
        <Headline style={{marginVertical: 40, color: 'white'}}>
          {weatherPlace.name}
        </Headline>
        <Image
          style={{height: 80, width: 130}}
          source={require('../../assets/images/cloud.png')}
        />
        <Text style={{fontSize: 70, fontWeight: '900', color: 'white'}}>
          {Math.round(weatherPlace.main?.temp)}&deg;c
        </Text>
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
