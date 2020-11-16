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
import Consumer from '../config/AppProvider';
import {device} from '../constants';
import WeatherByHour from '../components/WeatherByHour';

const HomeWeather = () => {
  return (
    <Consumer>
      {(ctx) => {
        const {
          weatherPlace,
          weatherImage,
          placeSearch,
          setPlaceSearch,
          weatherHourly,
          callApi,
          getHourly,
          getDailyWeather,
        } = ctx;

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
                  callApi();
                  getHourly();
                  getDailyWeather();
                }}
                onIconPress={() => {
                  callApi();
                  getHourly();
                  getDailyWeather();
                }}
              />
            </View>

            <View style={{alignItems: 'center'}}>
              <Headline style={{marginVertical: 20, color: 'white'}}>
                {weatherPlace.name}
              </Headline>
              {weatherImage !== '' ? (
                <Image
                  style={{height: 130, width: 130}}
                  source={weatherImage}
                />
              ) : null}
              <Text style={{fontSize: 17, fontWeight: '900', color: 'white'}}>
                {weatherPlace !== ''
                  ? weatherPlace.weather[0]?.description
                  : null}
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
                    weatherPlace.main?.temp_min > 0
                      ? 'weather-sunny'
                      : 'snowflake'
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
      }}
    </Consumer>
  );
};
export default HomeWeather;
