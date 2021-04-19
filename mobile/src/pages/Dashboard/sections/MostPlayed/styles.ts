import styled from 'styled-components/native';

import { FlatList } from 'react-native';

import AlbumDTO from '~/pages/Dashboard/dtos/AlbumDTO';

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

export const Container = styled(FlatList as new () => FlatList<AlbumDTO>).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const AlbumItem = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  margin-left: 16px;
  padding: 16px;

  border-radius: 5px;
  background: ${({ theme }) => theme.colors.lightBlack};
`;

export const AlbumItemImage = styled.Image`
  height: 116px;
  width: 116px;

  border-radius: 5px;
`;

export const AlbumItemTextContainer = styled.View`
  justify-content: center;
  align-items: center;

  margin-top: 12px;
`;

export const AlbumItemText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.medium};
`;

export const AlbumItemMusicsText = styled.Text`
  color: ${({ theme }) => theme.colors.lightGray};
  font-family: ${({ theme }) => theme.typography.regular};
  font-size: 14px;
  margin-top: 4px;
`;
