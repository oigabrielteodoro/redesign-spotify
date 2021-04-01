import styled, { css } from 'styled-components/native';

import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  isErrored: boolean;
}

interface IconProps {
  isFilled: boolean;
  isFocused: boolean;
}

interface TextInputLabel {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  background: ${({ theme }) => theme.colors.dark};

  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 60px;

  border-radius: 5px;
  margin-bottom: 16px;

  padding: 0 16px;

  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.dark};

  ${({ theme, isErrored }) =>
    isErrored &&
    css`
      border-color: ${theme.colors.red};
    `};

  ${({ theme, isFocused }) =>
    isFocused &&
    css`
      border-color: ${theme.colors.green};
    `};
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  font-family: 'Rubik-Regular';
  color: ${({ theme }) => theme.colors.lightGray};

  position: relative;

  margin-left: 15px;
`;

export const Icon = styled(FeatherIcon)<IconProps>`
  color: ${({ theme }) => theme.colors.lightGray};

  ${({ theme, isFocused, isFilled }) =>
    (isFocused || isFilled) &&
    css`
      color: ${theme.colors.green};
    `};
`;
