import * as Yup from 'yup';

export default function getSignInSchema() {
  const schema = Yup.object({
    email: Yup.string().required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 digits'),
  });

  return schema;
}
