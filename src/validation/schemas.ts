import { object, string } from 'yup';

export const registrationSchema = object({
  name: string().required('Name is required.'),
  email: string()
    .matches(
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      'Email must be a valid format (e.g., user@example.com).',
    )
    .required('Email is required.'),
  password: string()
    .matches(
      /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
      'The password must consist of 6 English letters and 1 number.',
    )
    .required('Password is required.'),
});

export const loginSchema = object({
  email: string()
    .matches(
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      'Email must be a valid format (e.g., user@example.com).',
    )
    .required('Email is required.'),
  password: string()
    .matches(
      /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
      'The password must consist of 6 English letters and 1 number.',
    )
    .required('Password is required.'),
});
