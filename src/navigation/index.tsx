import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignInPage from '../pages/SignIn';
import SignUpPage from '../pages/SignUp';
import ForgotPasswordPage from '../pages/ForgotPassword';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInPage} />
      <Stack.Screen name="SignUp" component={SignUpPage} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordPage} />
    </Stack.Navigator>
  );
};

export default Navigation;
