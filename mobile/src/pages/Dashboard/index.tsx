import React from 'react';

import useIcons from '~/hooks/useIcons';

import Recent from './sections/Recent';

import { Wrapper, Container, Header, Title, HeaderButtons, HeaderIconButton } from './styles';

const Dashboard = () => {
  const { getIcon } = useIcons();

  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Boa noite</Title>

          <HeaderButtons>
            <HeaderIconButton>{getIcon('clock', 20, '#fff', 'feather')}</HeaderIconButton>
            <HeaderIconButton>{getIcon('settings', 20, '#fff', 'feather')}</HeaderIconButton>
          </HeaderButtons>
        </Header>

        <Recent />
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
