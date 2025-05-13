import { AxiosError } from 'axios';

const isAxiosErrorWithMessage = (
  error: unknown,
): error is AxiosError<{ message?: string }> => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'isAxiosError' in error &&
    (error as AxiosError).isAxiosError
  );
};

export const getAxiosErrorMessage = (error: unknown): string => {
  if (isAxiosErrorWithMessage(error)) {
    return (
      error.response?.data?.message || error.message || 'Something went wrong'
    );
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'An unknown error occurred';
};
