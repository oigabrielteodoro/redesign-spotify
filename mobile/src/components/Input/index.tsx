import React, { useState } from 'react';

import { TextInputProps } from 'react-native';

import { RegisterOptions, useController, useFormContext } from 'react-hook-form';

import { useTheme } from 'styled-components';

import useIcons from '~/hooks/useIcons';

import {
  Wrapper,
  Container,
  TextInput,
  Icon as IconElement,
  ErrorContainer,
  ErrorIcon,
  ErrorText,
  ClearContainer,
} from './styles';

interface InputProps extends Omit<TextInputProps, 'ref' | 'defaultValue'> {
  inputRef?: any;
  name: string;
  icon: string;
  defaultValue?: string;
  rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
}

const Input = ({ inputRef, name, icon: Icon, rules, defaultValue = '', ...rest }: InputProps) => {
  const theme = useTheme();

  const { getIcon } = useIcons();

  const { watch, setValue, control, errors } = useFormContext();

  const { field } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(!!defaultValue && defaultValue.length > 0);

  const fieldValue = watch(name);
  const errorMessage = errors[name];

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);

    setIsFilled(!!fieldValue && fieldValue.length > 0);
  }

  function handleClear() {
    setValue(name, undefined);
  }

  return (
    <Wrapper>
      <Container isFilled={isFilled} isFocused={isFocused} isErrored={false}>
        {Icon && <IconElement name={Icon} size={20} isFilled={isFilled} isFocused={isFocused} />}

        <TextInput
          ref={inputRef}
          value={field.value}
          onBlur={handleBlur}
          onFocus={handleFocus}
          keyboardAppearance="dark"
          defaultValue={defaultValue}
          onChangeText={field.onChange}
          placeholderTextColor={theme.colors.lightGray}
          {...rest}
        />

        {fieldValue?.length > 0 && (
          <ClearContainer onTouchEnd={handleClear}>{getIcon('x', 12, theme.colors.gray, 'feather')}</ClearContainer>
        )}
      </Container>

      {errorMessage && (
        <ErrorContainer>
          <ErrorIcon>{getIcon('alert-circle', 20, theme.colors.red, 'feather')}</ErrorIcon>

          <ErrorText>{errorMessage.message}</ErrorText>
        </ErrorContainer>
      )}
    </Wrapper>
  );
};

export default Input;
