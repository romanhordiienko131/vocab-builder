import { useAppSelector } from '../../redux/hooks.ts';
import { selectIsLoggedIn } from '../../redux/auth/selectors.ts';
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface PrivateRouteProps {
  children: ReactNode;
  redirectTo: string;
}

export const PrivateRoute = ({ children, redirectTo }: PrivateRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};
