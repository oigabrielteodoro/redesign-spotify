import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.green};
  border-radius: 5px;

  height: 60px;
  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;

  font-family: 'Rubik-Medium';
`;
