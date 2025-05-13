import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import clsx from 'clsx';

interface PasswordInputProps {
  error?: string;
}

export const PasswordInput = ({ error, ...rest }: PasswordInputProps) => {
  const [isShowingPassword, setIsShowingPassword] = useState(false);

  const { register } = useFormContext();

  return (
    <div>
      <div className="relative mb-1">
        <input
          {...register('password')}
          {...rest}
          type={isShowingPassword ? 'text' : 'password'}
          placeholder="Password"
          className={clsx(
            'w-full rounded-[0.938rem] border py-4 pr-11 pl-4.5 leading-6 placeholder-black outline-0 duration-300',
            error
              ? 'border-[#d80027]'
              : 'hover:border-green focus:border-green border-black/10',
          )}
        />
        <button
          aria-label={isShowingPassword ? 'Hide password' : 'Show password'}
          type="button"
          onClick={() => setIsShowingPassword((prev) => !prev)}
          className="absolute top-1/2 right-4.5 -translate-y-1/2"
        >
          <svg aria-hidden={true} className="size-5">
            <use
              href={
                isShowingPassword
                  ? '/icons/icons.svg#eye'
                  : '/icons/icons.svg#eye-off'
              }
            ></use>
          </svg>
        </button>
      </div>
      <p className="tracking-1 text-xs leading-4.5 text-[#d80027]">{error}</p>
    </div>
  );
};
