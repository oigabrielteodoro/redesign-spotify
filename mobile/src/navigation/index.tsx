import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Tabs from './tabs';
import Stack from './stack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default Navigation;
