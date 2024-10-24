// Dashboard.jsx
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../componentes/Utilidades/Sidebar';
import Header from '../componentes/Utilidades/Header';
import Inicio from '../paginas/Inicio';
import Mesas from '../paginas/Mesas';
import Inventario from '../paginas/Inventario';
import Menu from '../paginas/Menu';
import Recetas from '../paginas/Recetas';
import Roles from '../paginas/Roles';
import Proveedores from '../paginas/Proveedores';
import Informes from '../paginas/Informes';
import Ayuda from '../paginas/Ayuda';
import Configuraciones from '../paginas/Configuraciones';
import '../estilos/Utilidades/Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/dashboard" element={<Inicio />} />
          <Route path="/Mesas" element={<Mesas />} />
          <Route path="/Inventario" element={<Inventario />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Recetas" element={<Recetas />} />
          <Route path="/Roles" element={<Roles />} />
          <Route path="/Proveedores" element={<Proveedores />} />
          <Route path="/Informes" element={<Informes />} />
          <Route path="/Ayuda" element={<Ayuda />} />
          <Route path="/Configuraciones" element={<Configuraciones />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
