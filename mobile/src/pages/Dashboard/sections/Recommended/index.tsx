import React from 'react';

import { artists } from '../../constants';

import { Wrapper, Title, Container, ArtistItem, ArtistItemImage, ArtistItemText } from './styles';

const Recommended = () => {
  return (
    <Wrapper>
      <Title>Artistas recomendados</Title>

      <Container
        data={artists}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ArtistItem activeOpacity={0.8}>
            <ArtistItemImage source={item.avatar_url} />
            <ArtistItemText>{item.name}</ArtistItemText>
          </ArtistItem>
        )}
      />
    </Wrapper>
  );
};

export default Recommended;
