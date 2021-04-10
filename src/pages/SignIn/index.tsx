import React, { useRef } from 'react';

import { Platform, Alert, KeyboardAvoidingView, ScrollView, Keyboard } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useForm, FormProvider } from 'react-hook-form';

import useIcons from '../../hooks/useIcons';

import { useAuth } from '../../context/auth';

import logoImg from '../../../assets/img/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import SignInRules from './rules/SignInRules';

import SignInFields from './dtos/SignInFields';

import {
  Wrapper,
  Container,
  Logo,
  ForgotPasswordButton,
  ForgotPasswordText,
  CreateAccountWrapper,
  CreateAccountSeparatorText,
  CreateAccountSeparator,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn = () => {
  const { signIn } = useAuth();

  const navigation = useNavigation();

  const passwordInputRef = useRef<any>(null);

  const { getIcon } = useIcons();

  const { handleSubmit, ...rest } = useForm();

  async function onSubmit() {
    Keyboard.dismiss();

    await signIn({
      email: 'oi@gabrielteodoro.com',
      password: '123456',
    });

    Alert.alert('Authenticated!', 'You have been authenticated to your Spotify account!');

    setTimeout(() => {
      navigation.navigate('Dashboard');
    }, 1000);
  }

  return (
    <Wrapper>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <Container>
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

              <ForgotPasswordButton onPress={() => navigation.navigate('ForgotPassword')}>
                <ForgotPasswordText>Forgot your password?</ForgotPasswordText>
              </ForgotPasswordButton>

              <Button onPress={handleSubmit(onSubmit)}>Sign In</Button>
            </FormProvider>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountWrapper>
        <CreateAccountSeparator />
        <CreateAccountSeparatorText>OR</CreateAccountSeparatorText>
        <CreateAccountSeparator />
      </CreateAccountWrapper>

      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <CreateAccountButtonText>Create your account</CreateAccountButtonText>
      </CreateAccountButton>
    </Wrapper>
  );
};

export default SignIn;
