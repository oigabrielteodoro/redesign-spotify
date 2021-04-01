import React, { useEffect, useState } from 'react';

import FeatherIcon from 'react-native-vector-icons/Feather';

import { TextInputProps } from 'react-native';

import { useFormContext } from 'react-hook-form';

import { useTheme } from 'styled-components';

import { Container, TextInput, Icon as IconElement } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

FeatherIcon.loadFont();

const Input = ({ name, icon: Icon, defaultValue, ...rest }: InputProps) => {
  const theme = useTheme();

  const { register, unregister, setValue, watch } = useFormContext();

  const [isFilled, setIsFilled] = useState(!!defaultValue && defaultValue.length > 0);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    register(name);

    return () => {
      unregister(name);
    };
  }, [name, register, unregister]);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);

    const fieldValue = watch(name);

    setIsFilled(!!fieldValue && fieldValue.length > 0);
  }

  return (
    <Container isFilled={isFilled} isFocused={isFocused} isErrored={false}>
      {Icon && <IconElement name={Icon} size={20} isFilled={isFilled} isFocused={isFocused} />}

      <TextInput
        onBlur={handleBlur}
        onFocus={handleFocus}
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        onChangeText={text => setValue(name, text)}
        placeholderTextColor={theme.colors.lightGray}
        {...rest}
      />
    </Container>
  );
};

export default Input;
