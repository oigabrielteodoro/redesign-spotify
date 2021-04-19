import React from 'react';

import lottieSoundAnimation from '../../../../../assets/animations/lottie/sound-wave.json';

import { artists } from '../../constants';

import {
  Wrapper,
  Container,
  ArtistItem,
  ArtistItemImage,
  ArtistItemText,
  ArtistItemAnimationContainer,
} from './styles';

const Recent = () => {
  return (
    <Wrapper>
      <Container
        data={artists.slice(0, 4)}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ArtistItem activeOpacity={0.8}>
            <ArtistItemImage source={item.avatar_url} />
            <ArtistItemText>{item.name}</ArtistItemText>

            {item.isPlaying && <ArtistItemAnimationContainer source={lottieSoundAnimation} />}
          </ArtistItem>
        )}
      />
    </Wrapper>
  );
};

export default Recent;
