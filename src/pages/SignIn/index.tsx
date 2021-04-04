import React, { useRef } from 'react';

import { Platform, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useForm, FormProvider } from 'react-hook-form';

import logoImg from '../../../assets/img/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import SignInRules from './rules/SignInRules';

import SignInFields from './dtos/SignInFields';

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
  const navigation = useNavigation();

  const passwordInputRef = useRef<any>(null);

  const { handleSubmit, ...rest } = useForm();

  function onSubmit() {
    Alert.alert('Authenticated!', 'You have been authenticated to your Spotify account!');

    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  }

  return (
    <Wrapper>
      <Container style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
        <ContentWrapper>
          <Logo source={logoImg} />

          <FormProvider handleSubmit={handleSubmit} {...rest}>
            <Input
              name={SignInFields.email}
              icon="mail"
              autoCorrect={false}
              placeholder="E-mail"
              returnKeyType="next"
              autoCapitalize="none"
              keyboardType="email-address"
              rules={SignInRules.email}
              onSubmitEditing={() => {
                passwordInputRef.current?.focus();
              }}
            />

            <Input
              inputRef={passwordInputRef}
              name={SignInFields.password}
              icon="lock"
              placeholder="Password"
              secureTextEntry
              returnKeyType="send"
              rules={SignInRules.password}
              onSubmitEditing={() => {
                handleSubmit(onSubmit);
              }}
            />

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
