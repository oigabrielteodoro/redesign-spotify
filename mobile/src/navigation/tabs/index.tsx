import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';

import DashboardPage from '~/pages/Dashboard';

const Tab = createBottomTabNavigator();

interface Icon {
  [name: string]: {
    lib: React.ComponentClass<any>;
    name: string;
  };
}

const icons: Icon = {
  Dashboard: {
    lib: AntDesign,
    name: 'home',
  },
  Search: {
    lib: AntDesign,
    name: 'search1',
  },
  Library: {
    lib: Ionicons,
    name: 'library',
  },
  Profile: {
    lib: MaterialIcons,
    name: 'tag-faces',
  },
};

const TabNavigation = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { lib: Icon, name } = icons[route.name];

          return <Icon name={name} size={20} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: theme.colors.lightBlack,
          borderTopColor: theme.colors.black,
          paddingTop: 5,
        },
        labelStyle: {
          marginTop: 5,
          textAlign: 'center',
          fontFamily: theme.typography.medium,
          fontSize: 12,
        },
        iconStyle: {
          marginRight: 3,
        },
        keyboardHidesTabBar: true,
        activeTintColor: theme.colors.green,
        inactiveTintColor: theme.colors.gray,
      }}
    >
      <Tab.Screen name="Dashboard" component={DashboardPage} options={{ title: 'Início' }} />
      <Tab.Screen name="Search" component={DashboardPage} options={{ title: 'Buscar' }} />
      <Tab.Screen name="Library" component={DashboardPage} options={{ title: 'Biblioteca' }} />
      <Tab.Screen name="Profile" component={DashboardPage} options={{ title: 'Perfil' }} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
