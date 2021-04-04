import { RegisterOptions } from 'react-hook-form';

import patterns from '../../../patterns';

import ForgotPasswordFields from '../dtos/ForgotPasswordFields';

const { email } = ForgotPasswordFields;

interface ForgotPasswordRules {
  [key: string]: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
}

const rules: ForgotPasswordRules = {
  [email]: {
    required: 'E-mail is required',
    pattern: {
      value: patterns.email,
      message: 'Invalid email',
    },
  },
};

export default rules;
