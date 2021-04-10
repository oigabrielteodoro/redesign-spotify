import { RegisterOptions } from 'react-hook-form';

import patterns from '../../../patterns';

import SignInFields from '../dtos/SignInFields';

const { email, password } = SignInFields;

interface SignInRules {
  [key: string]: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
}

const rules: SignInRules = {
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
