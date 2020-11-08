import React from 'react';
import {View} from 'react-native';
import HomeWeather from './src/screens/Home';
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

fontConfig.ios = fontConfig.default;
fontConfig.android = fontConfig.default;

const App = () => {
  return (
    <PaperProvider
      theme={{
        ...DefaultTheme,

        // fonts: configureFonts(fontConfig),
      }}>
      <HomeWeather />
    </PaperProvider>
  );
};

export default App;
