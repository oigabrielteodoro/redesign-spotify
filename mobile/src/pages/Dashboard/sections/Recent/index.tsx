import React from 'react';

import lottieSoundAnimation from '../../../../../assets/animations/lottie/sound-wave.json';

import {
  Wrapper,
  Container,
  ArtistItem,
  ArtistItemImage,
  ArtistItemText,
  AnimationContainer,
  ArtistItemAnimationContainer,
} from './styles';

const items = [
  {
    id: 1,
    name: 'Krawk',
    isPlaying: true,
    avatar_url: require('../../../../../assets/img/artists/Krawk.png'),
  },
  {
    id: 2,
    name: 'Kant',
    isPlaying: false,
    avatar_url: require('../../../../../assets/img/artists/Kant.png'),
  },
  {
    id: 3,
    name: 'Matuê',
    isPlaying: false,
    avatar_url: require('../../../../../assets/img/artists/Matue.png'),
  },
  {
    id: 4,
    name: 'Mc Fioti',
    isPlaying: false,
    avatar_url: require('../../../../../assets/img/artists/Fioti.png'),
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
