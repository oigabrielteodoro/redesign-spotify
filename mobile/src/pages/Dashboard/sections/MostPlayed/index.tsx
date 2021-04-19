import React from 'react';

import { albums } from '../../constants';

import {
  Wrapper,
  Title,
  Container,
  AlbumItem,
  AlbumItemImage,
  AlbumItemTextContainer,
  AlbumItemMusicsText,
  AlbumItemText,
} from './styles';

const MostPlayed = () => {
  return (
    <Wrapper>
      <Title>Mais tocados no Brasil</Title>

      <Container
        data={albums}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <AlbumItem activeOpacity={0.8}>
            <AlbumItemImage source={item.thumbnail_url} />
            <AlbumItemTextContainer>
              <AlbumItemText>{item.name}</AlbumItemText>
              <AlbumItemMusicsText>{item.amount} faixas</AlbumItemMusicsText>
            </AlbumItemTextContainer>
          </AlbumItem>
        )}
      />
    </Wrapper>
  );
};

export default MostPlayed;
