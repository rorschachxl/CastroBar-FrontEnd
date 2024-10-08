import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './componentes/Sidebar';
import Header from './componentes/Header';
import './App.scss';
import { UserContext } from './componentes/Usercontext';
import Ayuda from './paginas/Ayuda';
import Configuraciones from './paginas/Configuraciones';
import Informes from './paginas/Informes';
import Inicio from './paginas/Inicio';
import Inventario from './paginas/Inventario';
import Menu from './paginas/Menu';
import Mesas from './paginas/Mesas';
import Recetas from './paginas/Recetas';
import Roles from './paginas/Roles';

export function App() {
  const user = { name: 'Admin' };

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <div className='app-container'>
          <Header />
          <div className='main-content'>
            <Sidebar />
            <div className='content'>
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Ayuda" element={<Ayuda />} />
                <Route path="/Configuraciones" element={<Configuraciones />} />
                <Route path="/Informes" element={<Informes />} />
                <Route path="/Inventario" element={<Inventario />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/Mesas" element={<Mesas />} />
                <Route path="/Recetas" element={<Recetas />} />
                <Route path="/Roles" element={<Roles />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
