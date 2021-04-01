import React, { useCallback } from 'react';

import { Platform } from 'react-native';

import { useForm, FormProvider } from 'react-hook-form';

import logoImg from '../../../assets/img/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Wrapper,
  Container,
  Logo,
  ContentWrapper,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountWrapper,
  CreateAccountSeparatorText,
  CreateAccountSeparator,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn = () => {
  const { handleSubmit, ...rest } = useForm();

  const onSubmit = useCallback(() => {
    console.log('submit');
  }, []);

  return (
    <Wrapper>
      <Container style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
        <ContentWrapper>
          <Logo source={logoImg} />

          <FormProvider handleSubmit={handleSubmit} {...rest}>
            <Input
              name="email"
              icon="mail"
              autoCorrect={false}
              placeholder="E-mail"
              returnKeyType="next"
              autoCapitalize="none"
              keyboardType="email-address"
            />

            <Input name="password" icon="lock" placeholder="Password" secureTextEntry returnKeyType="send" />

            <ForgotPassword>
              <ForgotPasswordText>Forgot your password?</ForgotPasswordText>
            </ForgotPassword>

            <Button onPress={handleSubmit(onSubmit)}>Sign In</Button>
          </FormProvider>

          <CreateAccountWrapper>
            <CreateAccountSeparator />
            <CreateAccountSeparatorText>OR</CreateAccountSeparatorText>
            <CreateAccountSeparator />
          </CreateAccountWrapper>

          <CreateAccountButton>
            <CreateAccountButtonText>Create your account</CreateAccountButtonText>
          </CreateAccountButton>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default SignIn;
