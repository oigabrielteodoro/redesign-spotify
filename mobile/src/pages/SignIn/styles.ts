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

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin: 130px auto 70px;
`;

export const Content = styled.View`
  margin-top: 70px;

  width: 100%;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin-bottom: 16px;
  margin-right: auto;
`;

export const ForgotPasswordText = styled.Text`
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.typography.medium};
  font-size: 16px;
`;

export const CreateAccountWrapper = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 0 16px;
  margin-top: 16px;
`;

export const CreateAccountSeparator = styled.View`
  height: 1px;
  flex: 1;
  background: ${({ theme }) => theme.colors.darkGray};
`;

export const CreateAccountSeparatorText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.typography.regular};
  margin: 0 16px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  margin: 16px auto 0;
`;

export const CreateAccountButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.typography.medium};
  font-size: 16px;
`;
