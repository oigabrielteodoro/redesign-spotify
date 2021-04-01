import React, { useCallback } from 'react';

import { Platform } from 'react-native';

import { useForm, FormProvider } from 'react-hook-form';

import logoImg from '../../../assets/img/logo.png';

import Input from '../../components/Input';

import { Wrapper, Container, Logo, Content, ContentWrapper } from './styles';

const SignIn = () => {
  const { handleSubmit, ...rest } = useForm();

  const onSubmit = useCallback(() => {
    console.log('submit');
  }, []);

  return (
    <Wrapper>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
        <ContentWrapper>
          <Logo source={logoImg} />

          <Content>
            <FormProvider handleSubmit={handleSubmit} {...rest}>
              <Input name="email" icon="mail" placeholder="E-mail" />
              <Input name="password" icon="lock" placeholder="Senha secreta" />
            </FormProvider>
          </Content>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default SignIn;
