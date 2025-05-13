import { InputHTMLAttributes } from 'react';
import { FieldPath, FieldValues, useFormContext } from 'react-hook-form';
import clsx from 'clsx';

interface FormInputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  fieldName: FieldPath<T>;
  error?: string;
}

export const FormInput = <T extends FieldValues>({
  fieldName,
  error,
  ...rest
}: FormInputProps<T>) => {
  const { register } = useFormContext<T>();

  return (
    <div>
      <input
        {...register(fieldName)}
        {...rest}
        className={clsx(
          'mb-1 w-full rounded-[0.938rem] border px-4.5 py-4 leading-6 placeholder-black outline-0 duration-300',
          error
            ? 'border-[#d80027]'
            : 'hover:border-green focus:border-green border-black/10',
        )}
      />
      <p className="tracking-1 text-xs leading-4.5 text-[#d80027]">{error}</p>
    </div>
  );
};
