import React from 'react';

import useIcons from '~/hooks/useIcons';

import trapOuroImg from '../../../../../assets/img/playlists/TrapOuro.png';

import { Container, Image, InformationContainer, Title, Description, PlayButton } from './styles';

const NewCustomPlaylist = () => {
  const { getIcon } = useIcons();

  return (
    <Container activeOpacity={0.8}>
      <Image source={trapOuroImg} />

      <InformationContainer>
        <Title>Trap Ouro</Title>
        <Description>Tudo sobre o Trap Nacional!</Description>
      </InformationContainer>

      <PlayButton>{getIcon('play', 16, '#fff', 'ionicons')}</PlayButton>
    </Container>
  );
};

export default NewCustomPlaylist;
