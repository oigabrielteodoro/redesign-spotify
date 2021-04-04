import SignInFields from '../dtos/SignInFields';

const { email, password } = SignInFields;

export default {
  [email]: {
    required: 'Email is required',
  },
  [password]: {
    required: 'Password is required',
    minLength: {
      message: 'Use at least 6 characters',
      value: 6,
    },
  },
};
