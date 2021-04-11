import { FlatList } from 'react-native';

import styled from 'styled-components/native';

import ArtistDTO from '~/pages/Dashboard/dtos/ArtistDTO';

export const Wrapper = styled.View`
  margin-top: 16px;

  padding: 0 15px;
`;

export const Container = styled(FlatList as new () => FlatList<ArtistDTO>).attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})``;

export const PlaylistItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  background: ${({ theme }) => theme.colors.lightBlack};
  border-radius: 5px;

  flex: 1;
  margin: 5px;
`;

export const PlaylistItemImage = styled.Image`
  width: 50px;
  height: 50px;

  border-radius: 5px;
  margin-right: 16px;
`;

export const PlaylistItemText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.typography.medium};
`;
