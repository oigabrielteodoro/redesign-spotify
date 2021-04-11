import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import dark from '~/styles/themes/dark';

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

export const Container = styled.View``;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.bold};
  font-size: 20px;
`;

export const HeaderButtons = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderIconButton = styled.TouchableOpacity`
  margin-left: 16px;
`;
