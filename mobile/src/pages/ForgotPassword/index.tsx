import React from 'react';

import { Platform, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useForm, FormProvider } from 'react-hook-form';

import logoImg from '../../../assets/img/logo.png';

import Input from '~/components/Input';
import Button from '~/components/Button';

import ForgotPasswordRules from './rules/ForgotPasswordRules';

import ForgotPasswordFields from './dtos/ForgotPasswordFields';

import {
  Wrapper,
  Container,
  Logo,
  ContentWrapper,
  BackPageWrapper,
  BackPageSeparatorText,
  BackPageSeparator,
  BackPageButton,
  BackPageButtonText,
} from './styles';

const ForgotPassword = () => {
  const navigation = useNavigation();

  const { handleSubmit, ...rest } = useForm();

  function onSubmit() {
    Alert.alert('Sended your password!', 'Your password has been sent to your registered email!');

    setTimeout(() => {
      navigation.navigate('SignIn');
    }, 1000);
  }

  return (
    <Wrapper>
      <Container style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
        <ContentWrapper>
          <Logo source={logoImg} />

          <FormProvider handleSubmit={handleSubmit} {...rest}>
            <Input
              name={ForgotPasswordFields.email}
              icon="mail"
              autoCorrect={false}
              placeholder="E-mail"
              returnKeyType="next"
              autoCapitalize="none"
              keyboardType="email-address"
              rules={ForgotPasswordRules.email}
              onSubmitEditing={() => {
                handleSubmit(onSubmit);
              }}
            />

            <Button onPress={handleSubmit(onSubmit)}>Get my password</Button>
          </FormProvider>

          <BackPageWrapper>
            <BackPageSeparator />
            <BackPageSeparatorText>OR</BackPageSeparatorText>
            <BackPageSeparator />
          </BackPageWrapper>

          <BackPageButton onPress={() => navigation.goBack()}>
            <BackPageButtonText>Back to Sign In</BackPageButtonText>
          </BackPageButton>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default ForgotPassword;
