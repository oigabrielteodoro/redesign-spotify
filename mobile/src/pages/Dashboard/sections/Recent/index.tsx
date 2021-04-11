/* eslint-disable import/no-dynamic-require */
import React from 'react';

import { Wrapper, Container, PlaylistItem, PlaylistItemImage, PlaylistItemText } from './styles';

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
          <PlaylistItem>
            <PlaylistItemImage source={require('../../../../../assets/img/artists/Krawk.png')} />
            <PlaylistItemText>{item.name}</PlaylistItemText>
          </PlaylistItem>
        )}
      />
    </Wrapper>
  );
};

export default Recent;
