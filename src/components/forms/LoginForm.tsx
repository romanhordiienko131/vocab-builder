import { FormProvider, useForm } from 'react-hook-form';
import { FormInput } from '../common/FormInput.tsx';
import { PasswordInput } from '../common/PasswordInput.tsx';
import { LoginFormData } from '../../validation/types.ts';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validation/schemas.ts';
import { useAppDispatch } from '../../redux/hooks.ts';
import { login } from '../../redux/auth/operations.ts';
import toast from 'react-hot-toast';

export const LoginForm = () => {
  const methods = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit = methods.handleSubmit((credentials) => {
    dispatch(login(credentials))
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
          Login
        </h2>
        <p className="tb:mb-8 tb:text-xl mb-10 leading-6 text-black/80">
          Please enter your login details to continue using our service:
        </p>

        <div className="tb:gap-4.5 mb-8 flex flex-col gap-3.5">
          <FormInput<LoginFormData>
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
          Login
        </button>
        <div className="text-center">
          <Link
            to="/register"
            className="leading-6 font-bold text-black/50 underline duration-300 hover:text-black"
          >
            Register
          </Link>
        </div>
      </form>
    </FormProvider>
  );
};
