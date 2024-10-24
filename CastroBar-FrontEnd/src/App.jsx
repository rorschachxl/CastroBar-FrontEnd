import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.scss';
import Ayuda from './paginas/Ayuda';
import Configuraciones from './paginas/Configuraciones';
import Informes from './paginas/Informes';
import Inicio from './paginas/Inicio';
import Inventario from './paginas/Inventario';
import Menu from './paginas/Menu';
import Mesas from './paginas/Mesas';
import Recetas from './paginas/Recetas';
import Roles from './paginas/Roles';
import IndexPage from './Routes/Index';
import Login from './componentes/Login/Login';
import DashboardLayoutBasic from './Routes/Dashboard';

const queryClient = new QueryClient();
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<DashboardRouter />} />
          </Routes>
        </Router>
    </QueryClientProvider>
  );
}

function DashboardRouter() {
  const location = useLocation();

  return (
    <DashboardLayoutBasic currentPath={location.pathname}>
      <Routes>
        <Route path="/dashboard" element={<Inicio />} />
        <Route path="/mesas" element={<Mesas />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/recetas" element={<Recetas />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/proveedores" element={<Ayuda />} />
        <Route path="/informes" element={<Informes />} />
        <Route path="/configuraciones" element={<Configuraciones />} />
      </Routes>
    </DashboardLayoutBasic>
  );
}

export default App;
