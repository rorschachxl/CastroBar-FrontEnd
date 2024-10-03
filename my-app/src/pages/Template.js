import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import '../css/Template.css';
import Header from '../components/template/Header';
import Sidebar from '../components/template/Sidebar';

function Template() {
    const cookies = useMemo(() => new Cookies(), []);
    const navigate = useNavigate();
    useEffect(() => {
        if (!cookies.get('id')) {
            navigate('/');
        }
    }, [cookies, navigate]);

    return (
        <>
        <div className="container">
            <Header />
            <div className="main-content">
                <Sidebar />
                <div className="content-area">
                    <form>
                        <input type="text" placeholder="Ingrese su nombre" />
                        <input type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default Template;
