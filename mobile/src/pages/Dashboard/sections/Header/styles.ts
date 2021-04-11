import styled from 'styled-components/native';

export const Container = styled.View`
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
