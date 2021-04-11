import React from 'react';

import useIcons from '~/hooks/useIcons';

import { Container, Title, HeaderButtons, HeaderIconButton } from './styles';

const Header = () => {
  const { getIcon } = useIcons();

  const now = new Date();

  const title =
    now.getHours() < 12 ? 'Bom dia' : now.getHours() > 12 && now.getHours() < 18 ? 'Boa tarde' : 'Boa noite';

  return (
    <Container>
      <Title>{title}</Title>

      <HeaderButtons>
        <HeaderIconButton>{getIcon('clock', 20, '#fff', 'feather')}</HeaderIconButton>
        <HeaderIconButton>{getIcon('settings', 20, '#fff', 'feather')}</HeaderIconButton>
      </HeaderButtons>
    </Container>
  );
};

export default Header;
