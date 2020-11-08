import React, {useEffect, useState} from 'react';
import {Image, ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import {device} from '../constants';

const WeatherByHour = ({data}) => {
  console.log('data', data[0].dt_txt);
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{
        justifyContent: 'space-around',
        backgroundColor: 'rgba(0, 102, 255, .1)',
        padding: 10,
      }}
      style={{width: device.width - 50}}>
      {data.length > 0 &&
        data?.map((item) => {
          return (
            <View style={{alignItems: 'center', marginHorizontal: 10}}>
              <Image
                style={{height: 20, width: 33}}
                source={require('../../assets/images/cloud.png')}
              />
              <Text style={{color: 'white'}}>
                {item.dt_txt.slice(10).slice(0, -3)}
              </Text>
              <Text style={{color: 'white'}}>
                {Math.round(item.main.temp)}&deg;c
              </Text>
            </View>
          );
        })}
    </ScrollView>
  );
};
export default WeatherByHour;
