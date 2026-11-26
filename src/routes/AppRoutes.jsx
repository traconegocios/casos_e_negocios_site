import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout.jsx';
import Home from '@/pages/Home/Home.jsx';
import Materia from '@/pages/Materia/Materia.jsx';
import NotFound from '@/pages/NotFound/NotFound.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/materia/:slug" element={<Materia />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
