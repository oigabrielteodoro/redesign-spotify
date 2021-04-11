import React, { useEffect } from 'react';

import { StatusBar, LogBox } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import { ThemeProvider } from 'styled-components';

import AppProvider from '~/context';

import Navigation from '~/navigation';

import dark from '~/styles/themes/dark';

import useIcons from '~/hooks/useIcons';

LogBox.ignoreLogs(['RCTBridge required dispatch_sync to load RCTDevLoadingView. This may lead to deadlocks']);

const App = () => {
  const { loadIcons } = useIcons();

  useEffect(() => {
    SplashScreen.hide();

    loadIcons();
  }, [loadIcons]);

  return (
    <ThemeProvider theme={dark}>
      <StatusBar barStyle="light-content" backgroundColor={dark.colors.black} translucent />

      <AppProvider>
        <Navigation />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
