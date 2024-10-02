import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import '../css/Login.css';
import Header from '../components/template/Header';

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
            <Header/>
        <div className="containerMenu">
            <br />
            <h5>ID: {cookies.get('id')}</h5>
            <br />
            <h5>Username: {cookies.get('number')}</h5>
            <br />
            <h5>Password: {cookies.get('password')}</h5>
            <br />
        </div>
        </>
    );
}

export default Template;
