import { Link } from 'react-router-dom';
import { PasswordInput } from '../common/PasswordInput.tsx';
import { FormInput } from '../common/FormInput.tsx';
import { FormProvider, useForm } from 'react-hook-form';
import { RegistrationFormData } from '../../validation/types.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationSchema } from '../../validation/schemas.ts';
import { useAppDispatch } from '../../redux/hooks.ts';
import { register } from '../../redux/auth/operations.ts';
import toast from 'react-hot-toast';

export const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const methods = useForm<RegistrationFormData>({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = methods.handleSubmit((credentials) => {
    dispatch(register(credentials))
      .unwrap()
      .catch((error) => {
        toast.error(error);
      });
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={onSubmit}
        className="bg-green/10 tb:rounded-[1.875rem] tb:py-12 tb:px-16 rounded-t-[1.563rem] px-4 pt-8 pb-[3.563rem]"
      >
        <h2 className="-tracking-2 tb:text-[2.5rem] tb:mb-5 tb:leading-12 mb-4 text-3xl leading-8 font-semibold">
          Register
        </h2>
        <p className="tb:mb-8 tb:text-xl mb-4 leading-6 text-black/80">
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>

        <div className="tb:gap-4.5 mb-8 flex flex-col gap-3.5">
          <FormInput<RegistrationFormData>
            fieldName="name"
            error={methods.formState.errors.name?.message}
            type="text"
            placeholder="Name"
          />
          <FormInput<RegistrationFormData>
            fieldName="email"
            error={methods.formState.errors.email?.message}
            type="email"
            placeholder="Email"
          />
          <PasswordInput error={methods.formState.errors.password?.message} />
        </div>

        <button
          type="submit"
          className="bg-green tb:text-lg tb:leading-7 mb-4 block w-full rounded-[1.875rem] py-4 leading-6 font-bold text-white duration-300 hover:bg-[#a5c0b8]"
        >
          Register
        </button>
        <div className="text-center">
          <Link
            to="/login"
            className="leading-6 font-bold text-black/50 underline duration-300 hover:text-black"
          >
            Login
          </Link>
        </div>
      </form>
    </FormProvider>
  );
};
