import { useAppSelector } from '../../redux/hooks.ts';
import { selectIsLoggedIn } from '../../redux/auth/selectors.ts';
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface RestrictedRouteProps {
  children: ReactNode;
  redirectTo: string;
}

export const RestrictedRoute = ({
  children,
  redirectTo,
}: RestrictedRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};
