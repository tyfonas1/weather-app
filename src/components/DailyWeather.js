import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  ImageBackgroundBase,
  ScrollView,
  View,
} from 'react-native';
import Consumer from '../config/AppProvider';
import {Chip, List, Text} from 'react-native-paper';
import {device} from '../constants';
import {getDay} from 'date-fns';

const DailyWeather = () => {
  const [weatherImage, setWeatherImage] = useState('');

  const getWeatherImage = (item) => {
    if (item?.weather[0]?.id > 800) {
      return (
        <Image
          style={{height: 70, width: 70}}
          source={require('../../assets/images/cloud.png')}
        />
      );
    } else if (item?.weather[0]?.id === 800) {
      return (
        <Image
          style={{height: 70, width: 70}}
          source={require('../../assets/images/clear.png')}
        />
      );
    } else if (item?.weather[0]?.id > 499 && item?.weather[0]?.id < 532) {
      return (
        <Image
          style={{height: 70, width: 70}}
          source={require('../../assets/images/rain.png')}
        />
      );
    }
  };
  let prevDay = null;
  const getCurrentDay = (d) => {
    if (prevDay !== d) {
      prevDay = d;
      switch (d) {
        case 0:
          return (
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                borderBottomColor: 'white',
                borderBottomWidth: 1,
              }}>
              Sunday
            </Text>
          );
        case 1:
          return (
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                borderBottomColor: 'white',
                borderBottomWidth: 1,
              }}>
              Monday
            </Text>
          );
        case 2:
          return (
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                borderBottomColor: 'white',
                borderBottomWidth: 1,
              }}>
              Tuesday
            </Text>
          );
        case 3:
          return (
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                borderBottomColor: 'white',
                borderBottomWidth: 1,
              }}>
              Wednesday
            </Text>
          );
        case 4:
          return (
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                borderBottomColor: 'white',
                borderBottomWidth: 1,
              }}>
              Thursday
            </Text>
          );
        case 5:
          return (
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                borderBottomColor: 'white',
                borderBottomWidth: 1,
              }}>
              Friday
            </Text>
          );
        case 6:
          return (
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                borderBottomColor: 'white',
                borderBottomWidth: 1,
              }}>
              Saturday
            </Text>
          );
        default:
          break;
      }
    } else {
      return null;
    }
  };
  //   var day = getDay(new Date(2020, 11, 17));

  return (
    <Consumer>
      {(ctx) => {
        const {dayWeather} = ctx;

        return (
          <ImageBackground
            style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}
            source={require('../../assets/images/sky.jpg')}>
            <ScrollView contentContainerStyle={{}}>
              {dayWeather?.list?.length > 0 &&
                dayWeather?.list.map((item) => {
                  const date = item.dt_txt.slice(0, 10).replace(/-/g, ',');
                  var day = getDay(new Date(date));

                  return (
                    <View
                      key={item.dt}
                      style={{
                        borderBottomColor: '#cccccc70',
                        borderBottomWidth: 2,
                        backgroundColor: '#69bbdc59',
                        paddingHorizontal: 10,
                      }}>
                      {getCurrentDay(day)}
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          paddingTop: 10,
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 20,
                            alignSelf: 'center',
                          }}>
                          {item.dt_txt.slice(11)}
                        </Text>
                        <Text style={{color: 'white', fontSize: 50}}>
                          {Math.round(item.main?.temp)}&deg;c
                        </Text>
                        {getWeatherImage(item)}
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Chip
                          icon="water-outline"
                          style={{margin: 5}}
                          onPress={() => console.log('Pressed')}>
                          {item.main?.humidity}%
                        </Chip>
                        <Chip
                          icon={
                            item.main?.temp_min > 0
                              ? 'weather-sunny'
                              : 'snowflake'
                          }
                          style={{margin: 5}}
                          onPress={() => console.log('Pressed')}>
                          {Math.round(item.main?.temp_max)}&deg;c /{' '}
                          {Math.round(item.main?.temp_min)}&deg;c
                        </Chip>
                        <Chip
                          icon="weather-windy"
                          style={{margin: 5}}
                          onPress={() => console.log('Pressed')}>
                          {Math.round(item.wind?.speed)} m/s
                        </Chip>
                      </View>
                    </View>
                  );
                })}
            </ScrollView>
          </ImageBackground>
        );
      }}
    </Consumer>
  );
};
export default DailyWeather;
