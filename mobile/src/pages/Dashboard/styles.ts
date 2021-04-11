import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import dark from '~/styles/themes/dark';

export const Wrapper = styled(LinearGradient).attrs({
  start: {
    x: 0,
    y: 1,
  },
  end: {
    x: 0,
    y: 0,
  },
  colors: [dark.colors.black, '#202020'],
})`
  flex: 1;

  padding: ${getStatusBarHeight() + 30}px 30px 50px;
`;

export const Container = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'handled',
  contentContainerStyle: { flex: 1 },
  showsVerticalScrollIndicator: false,
})``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.bold};
  font-size: 18px;
`;
