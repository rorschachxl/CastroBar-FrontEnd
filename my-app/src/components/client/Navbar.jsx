import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import "./Navbar.module.css";

const NavBar = () => {
    return (
        <div className="nav-wrapper">
            <Nav className="navBg" variant="pills">
                <Nav.Item>
                    <Nav.Link as={Link} to="/" className="nav-item">Entradas</Nav.Link>
                </Nav.Item>
                <span className="separator">|</span>
                <Nav.Item>
                    <Nav.Link as={Link} to="/sopas" className="nav-item">Sopas</Nav.Link>
                </Nav.Item>
                <span className="separator">|</span>
                <Nav.Item>
                    <Nav.Link as={Link} to="/ensaladas" className="nav-item">Ensaladas</Nav.Link>
                </Nav.Item>
                {/* Agrega más elementos aquí */}
            </Nav>
        </div>
    );
};

export default NavBar;