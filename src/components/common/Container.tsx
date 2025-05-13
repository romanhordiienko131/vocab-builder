import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="dt:max-w-[90rem] tb:px-8 mx-auto w-full px-4">
      {children}
    </div>
  );
};
