import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoute } from './PrivatRouter';
import { lazy, Suspense } from 'react';

const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));
const HomePage = lazy(() => import('pages/HomePage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route
              path="/favorites"
              element={
                <PrivateRoute redirectTo="/" component={<FavoritesPage />} />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer autoClose={1000} />
    </>
  );
};
