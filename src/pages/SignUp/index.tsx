import React, { useRef } from 'react';

import { Platform, Alert, KeyboardAvoidingView, ScrollView, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useForm, FormProvider } from 'react-hook-form';

import logoImg from '../../../assets/img/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import SignUpRules from './rules/SignUpRules';

import SignUpFields from './dtos/SignUpFields';

import {
  Wrapper,
  Container,
  Logo,
  BackPageWrapper,
  BackPageSeparatorText,
  BackPageSeparator,
  BackPageButton,
  BackPageButtonText,
} from './styles';

const SignUp = () => {
  const navigation = useNavigation();

  const emailInputRef = useRef<any>(null);
  const passwordInputRef = useRef<any>(null);

  const { handleSubmit, ...rest } = useForm();

  function onSubmit() {
    Alert.alert('Created account!', 'You have created your Spotify account!');

    setTimeout(() => {
      navigation.navigate('Home');
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
                name={SignUpFields.name}
                icon="tag"
                autoCorrect={false}
                placeholder="Name"
                returnKeyType="next"
                autoCapitalize="words"
                rules={SignUpRules.name}
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />

              <Input
                inputRef={emailInputRef}
                name={SignUpFields.email}
                icon="mail"
                autoCorrect={false}
                placeholder="E-mail"
                returnKeyType="next"
                autoCapitalize="none"
                keyboardType="email-address"
                rules={SignUpRules.email}
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Input
                inputRef={passwordInputRef}
                name={SignUpFields.password}
                icon="lock"
                placeholder="Password"
                secureTextEntry
                returnKeyType="send"
                rules={SignUpRules.password}
                onSubmitEditing={() => {
                  handleSubmit(onSubmit);
                }}
              />

              <Button onPress={handleSubmit(onSubmit)}>Sign Up</Button>
            </FormProvider>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackPageWrapper>
        <BackPageSeparator />
        <BackPageSeparatorText>OR</BackPageSeparatorText>
        <BackPageSeparator />
      </BackPageWrapper>

      <BackPageButton onPress={() => navigation.navigate('SignIn')}>
        <BackPageButtonText>Back to Sign In</BackPageButtonText>
      </BackPageButton>
    </Wrapper>
  );
};

export default SignUp;
