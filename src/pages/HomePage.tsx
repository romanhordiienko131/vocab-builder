import { useAppSelector } from '../redux/hooks.ts';
import { selectIsLoggedIn } from '../redux/auth/selectors.ts';
import { Navigate } from 'react-router-dom';

export default function HomePage() {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? (
    <Navigate to="/dictionary" />
  ) : (
    <Navigate to="/register" />
  );
}
