import '../../css/InicioMenu.css';
import { useNavigate } from 'react-router-dom';
import image from '../../img/gorro-de-cocinero.png';
import Header from '../../components/template/Header.jsx';
import SubHeader from '../../components/template/SubHeader.jsx';
import Button from '../../components/login/Button.jsx';


function InicioMenu() {
    const navigate = useNavigate();
    return (
        <>
            <SubHeader />
            <Header />
            <div className="container">
                <div className='box'>
                    <div className="img-container">
                        <img src={image} alt="Imagen Menu" draggable="false"/>
                    </div>
                    <h1>LA CARTA</h1>
                    <Button
                        label='ANTOJATE'
                        onClick={() => navigate("./Recomendados")}
                    />
                    <p>
                        En nuestro restaurante, cada plato cuenta una historia. Inspirados por lo mejor de la cocina tradicional, pero con un toque contemporáneo, creamos una experiencia culinaria que celebra tanto la autenticidad como la innovación. Trabajamos con ingredientes frescos y de calidad, cuidadosamente seleccionados para garantizar que cada bocado sea memorable.<br />
                        Nuestro menú ofrece una variedad de sabores que complacen todos los gustos. Desde entradas ligeras y deliciosas hasta sopas reconfortantes, cada elección te invita a descubrir nuevas sensaciones. Las ensaladas frescas y vibrantes complementan perfectamente nuestra selección de pastas artesanales y arroces, todos elaborados con un enfoque en la tradición y el sabor.
                    </p>
                    <div className="divider">
                        <span className="line"></span>
                        <span className="star">★</span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InicioMenu;
