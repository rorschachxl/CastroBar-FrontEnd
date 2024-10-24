// DashboardLayoutBasic.jsx
import React from 'react';
import Sidebar from '../componentes/Utilidades/Sidebar';
import Header from '../componentes/Utilidades/Header';
import '../estilos/DashboardLayout.scss';

const DashboardLayout = ({ children, currentPath }) => {
  return (
    <div className="dashboardLayout">
      <Sidebar />
      <div className="main-content">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout
