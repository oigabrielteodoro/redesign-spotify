import React from 'react';
import { Text } from 'react-native';

import logoImg from '../../../assets/img/logo.png';

import { Wrapper, Container, Logo } from './styles';

const SignIn = () => {
  return (
    <Wrapper>
      <Container>
        <Logo source={logoImg} />

        <Text>SignIn</Text>
      </Container>
    </Wrapper>
  );
};

export default SignIn;
