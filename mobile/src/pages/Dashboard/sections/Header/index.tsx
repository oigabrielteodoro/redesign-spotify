import React from 'react';

import useIcons from '~/hooks/useIcons';

import { Container, Title, HeaderButtons, HeaderIconButton } from './styles';

const Header = () => {
  const { getIcon } = useIcons();

  return (
    <Container>
      <Title>Boa noite</Title>

      <HeaderButtons>
        <HeaderIconButton>{getIcon('clock', 20, '#fff', 'feather')}</HeaderIconButton>
        <HeaderIconButton>{getIcon('settings', 20, '#fff', 'feather')}</HeaderIconButton>
      </HeaderButtons>
    </Container>
  );
};

export default Header;
