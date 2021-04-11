import React from 'react';

import LottieView from 'lottie-react-native';

import lottieSoundAnimation from '../../../../../assets/animations/lottie/sound-wave.json';

import {
  Wrapper,
  Container,
  ArtistItem,
  ArtistItemImage,
  ArtistItemText,
  ArtistItemAnimationContainer,
} from './styles';

const items = [
  {
    id: 1,
    name: 'Krawk',
    isPlaying: true,
    avatar_url: '../../../../../assets/img/artists/Krawk.png',
  },
  {
    id: 2,
    name: 'Kant',
    isPlaying: false,
    avatar_url: '../../../../../assets/img/artists/Krawk.png',
  },
  {
    id: 3,
    name: 'Matuê',
    isPlaying: false,
    avatar_url: '../../../../../assets/img/artists/Krawk.png',
  },
  {
    id: 4,
    name: 'Mc Fioti',
    isPlaying: false,
    avatar_url: '../../../../../assets/img/artists/Krawk.png',
  },
];

const Recent = () => {
  return (
    <Wrapper>
      <Container
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ArtistItem>
            <ArtistItemImage source={require('../../../../../assets/img/artists/Krawk.png')} />
            <ArtistItemText>{item.name}</ArtistItemText>

            {item.isPlaying && <ArtistItemAnimationContainer source={lottieSoundAnimation} />}
          </ArtistItem>
        )}
      />
    </Wrapper>
  );
};

export default Recent;
