import React, { useEffect } from 'react';

import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './navigation';

import dark from './styles/themes/dark';

import useIcons from './hooks/useIcons';

const App = () => {
  const { loadIcons } = useIcons();

  useEffect(() => {
    loadIcons();
  }, [loadIcons]);

  return (
    <ThemeProvider theme={dark}>
      <StatusBar barStyle="light-content" backgroundColor={dark.colors.black} translucent />

      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
