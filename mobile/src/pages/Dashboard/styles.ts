import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

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

  padding: 0 30px 50px;
`;

export const Container = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'handled',
  contentContainerStyle: { flex: 1 },
  showsVerticalScrollIndicator: false,
})``;
