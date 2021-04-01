import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import dark from '../../styles/themes/dark';

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

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
`;

export const ContentWrapper = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'handled',
  contentContainerStyle: { flex: 1 },
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const Logo = styled.Image`
  margin: 130px auto 0;
`;

export const Content = styled.View`
  margin-top: 70px;

  width: 100%;
`;
