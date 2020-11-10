import React from 'react';
import {SafeAreaView, View} from 'react-native';
import HomeWeather from './src/screens/Home';
import AppStatusBar from './src/components/AppStatusBar';
import {fonts, colors} from './src/constants';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const fontConfig = {
  default: {
    regular: {
      fontFamily: fonts.comfortaaRegular,
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: fonts.comfortaaMedium,
      fontWeight: 'normal',
    },
    light: {
      fontFamily: fonts.comfortaaLight,
      fontWeight: 'light',
    },
    semiBold: {
      fontFamily: fonts.comfortaaSemiBold,
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: fonts.comfortaaBold,
      fontWeight: 'bold',
    },
  },
};
const THEME_COLOR = '#5b559d';
fontConfig.ios = fontConfig.default;
fontConfig.android = fontConfig.default;

const App = () => {
  return (
    <PaperProvider
      theme={{
        ...DefaultTheme,

        // fonts: configureFonts(fontConfig),
      }}>
      <SafeAreaView style={{flex: 0, backgroundColor: THEME_COLOR}} />
      <SafeAreaView style={{flex: 1, backgroundColor: THEME_COLOR}}>
        <AppStatusBar backgroundColor={THEME_COLOR} barStyle="light-content" />
        <HomeWeather />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
