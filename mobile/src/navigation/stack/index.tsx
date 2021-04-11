import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignInPage from '~/pages/SignIn';
import SignUpPage from '~/pages/SignUp';

import ForgotPasswordPage from '~/pages/ForgotPassword';

import Tabs from '../tabs';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInPage} />
      <Stack.Screen name="SignUp" component={SignUpPage} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordPage} />

      <Stack.Screen name="Dashboard" component={Tabs} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
