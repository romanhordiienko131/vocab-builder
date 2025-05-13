import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './routing/RestrictedRoute.tsx';
import { PrivateRoute } from './routing/PrivateRoute.tsx';
import { useEffect, lazy, Suspense } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks.ts';
import { refreshUser } from '../redux/auth/operations.ts';
import { selectIsRefreshing } from '../redux/auth/selectors.ts';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('../pages/HomePage.tsx'));
const AuthPage = lazy(() => import('../pages/AuthPage.tsx'));
const DictionaryPage = lazy(() => import('../pages/DictionaryPage.tsx'));
const RecommendPage = lazy(() => import('../pages/RecommendPage.tsx'));
const TrainingPage = lazy(() => import('../pages/TrainingPage.tsx'));

export default function App() {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/dictionary">
                <AuthPage type={'register'} />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/dictionary">
                <AuthPage type={'login'} />
              </RestrictedRoute>
            }
          />
          <Route
            path="/dictionary"
            element={
              <PrivateRoute redirectTo="/register">
                <DictionaryPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/recommend"
            element={
              <PrivateRoute redirectTo="/register">
                <RecommendPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/training"
            element={
              <PrivateRoute redirectTo="/register">
                <TrainingPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
}
