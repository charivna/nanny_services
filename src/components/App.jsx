import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage';
import NanniesPage from 'pages/NanniesPage';
import FavoritesPage from 'pages/FavoritesPage';
import NotFoundPage from 'pages/NotFoundPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/psychologists" element={<NanniesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
