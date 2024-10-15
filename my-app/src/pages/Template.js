import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import '../css/Template.css';
import Header from '../components/template/Header';
import NavBar from '../components/client/Navbar.jsx';

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
            <NavBar  />
        </>
    );
}

export default Template;
