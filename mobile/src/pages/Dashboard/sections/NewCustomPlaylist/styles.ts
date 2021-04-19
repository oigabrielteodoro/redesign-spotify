import styled from 'styled-components/native';

import { lighten } from 'polished';

export const Container = styled.TouchableOpacity`
  margin: 16px 20px 0;

  padding: 16px;
  border-radius: 5px;

  background: ${({ theme }) => theme.colors.lightBlack};

  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  height: 60px;
  width: 60px;

  border-radius: 5px;
`;

export const InformationContainer = styled.View`
  align-items: flex-start;

  margin-left: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.semibold};

  font-size: 16px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.lightGray};
  font-family: ${({ theme }) => theme.typography.regular};
  font-size: 14px;
`;

export const PlayButton = styled.TouchableOpacity`
  background: ${({ theme }) => lighten(0.08, theme.colors.lightBlack)};

  height: 35px;
  width: 35px;

  padding: 1px 0 0 1.5px;

  border-radius: 10px;
  margin-left: auto;

  align-items: center;
  justify-content: center;
`;
