import React from 'react';
import {SafeAreaView, View} from 'react-native';
import HomeWeather from './src/screens/Home';
import AppStatusBar from './src/components/AppStatusBar';
import DailyWeather from './src/components/DailyWeather';
import {fonts, colors} from './src/constants';
import Consumer, {AppProvider} from './src/config/AppProvider';
import {
  BottomNavigation,
  configureFonts,
  DefaultTheme,
  Text,
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

const nowWeather = () => <HomeWeather />;

const lastSeven = () => <DailyWeather />;

const THEME_COLOR = '#015c9bcf';
fontConfig.ios = fontConfig.default;
fontConfig.android = fontConfig.default;

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'now', title: 'Weather Now', icon: 'brightness-6'},
    {key: 'last', title: '7 Days', icon: 'calendar-week'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    now: nowWeather,
    last: lastSeven,
  });
  return (
    <>
      <AppProvider>
        <>
          <PaperProvider
            theme={{
              ...DefaultTheme,

              // fonts: configureFonts(fontConfig),
            }}>
            <SafeAreaView style={{flex: 0, backgroundColor: THEME_COLOR}} />
            <SafeAreaView style={{flex: 1, backgroundColor: THEME_COLOR}}>
              <AppStatusBar
                backgroundColor={THEME_COLOR}
                barStyle="light-content"
              />
              <BottomNavigation
                navigationState={{index, routes}}
                onIndexChange={setIndex}
                renderScene={renderScene}
              />
            </SafeAreaView>
          </PaperProvider>
        </>
      </AppProvider>
    </>
  );
};

export default App;
