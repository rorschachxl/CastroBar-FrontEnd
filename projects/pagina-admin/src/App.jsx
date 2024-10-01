import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './componentes/Navbar'
import Sidebar from './componentes/Sidebar';
import './App.scss'
import Inicio from './paginas/inicio';
export function App(){
    return (
     <Router>
         <Navbar/>
         <div className='flex'>
            <Sidebar />
            <div className='content'>
            <Route path='/' exact={true} Component={Inicio} />
            </div>
        </div>
     </Router>

    )   
}

export default App;