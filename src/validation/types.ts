import { InferType } from 'yup';
import { loginSchema, registrationSchema } from './schemas.ts';

export type RegistrationFormData = InferType<typeof registrationSchema>;

export type LoginFormData = InferType<typeof loginSchema>;
