import { RegisterOptions } from 'react-hook-form';

import patterns from '../../../patterns';

import SignUpFields from '../dtos/SignUpFields';

const { name, username, email, password } = SignUpFields;

interface SignUpRules {
  [key: string]: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
}

const rules: SignUpRules = {
  [name]: {
    required: 'Name is required',
    pattern: {
      value: patterns.name,
      message: 'Enter your full name',
    },
  },
  [username]: {
    required: 'Username is required',
    maxLength: {
      message: 'Use a maximum of 16 characters',
      value: 16,
    },
  },
  [email]: {
    required: 'E-mail is required',
    pattern: {
      value: patterns.email,
      message: 'Invalid email',
    },
  },
  [password]: {
    required: 'Password is required',
    minLength: {
      message: 'Use at least 6 characters',
      value: 6,
    },
  },
};

export default rules;
