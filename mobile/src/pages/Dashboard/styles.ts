import styled from 'styled-components/native';

import { FlatList } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import dark from '~/styles/themes/dark';

import ItemDTO from './dtos/ItemDTO';

export const Wrapper = styled(LinearGradient).attrs({
  start: {
    x: 0.08,
    y: 0.2,
  },
  end: {
    x: 0,
    y: 0,
  },
  locations: [0, 1],
  colors: [dark.colors.black, '#8B58A4'],
})`
  flex: 1;

  padding: ${getStatusBarHeight() + 30}px 0 50px;
`;

export const Container = styled(FlatList as new () => FlatList<ItemDTO>)``;
