import styled from 'styled-components/native';

import { FlatList } from 'react-native';

import ArtistDTO from '~/pages/Dashboard/dtos/ArtistDTO';

export const Wrapper = styled.View`
  margin-top: 16px;
  padding: 0 4px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.bold};

  margin: 0 16px 16px;
`;

export const Container = styled(FlatList as new () => FlatList<ArtistDTO>).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const ArtistItem = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  margin-left: 16px;
`;

export const ArtistItemImage = styled.Image`
  height: 80px;
  width: 80px;

  border-radius: 40px;
`;

export const ArtistItemText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.lightGray};
  font-family: ${({ theme }) => theme.typography.regular};

  margin-top: 8px;
`;
