import {Link} from 'react-router-dom'
const Sidebar=() => {
    return(
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="">Inicio</Link>
                </li>
                <li>
                    <Link to="">Mesas</Link>
                </li>
                <li>
                    <Link to="">Inventario</Link>
                </li>
                <li>
                    <Link to="">Menu</Link>
                </li>
                <li>
                    <Link to="">Recetas</Link>
                </li>
                <li>
                    <Link to="">Roles</Link>
                </li>
                <li>
                    <Link to="">Informes</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar