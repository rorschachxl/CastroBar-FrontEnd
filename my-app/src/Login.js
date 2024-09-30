import React, { useState } from 'react';
import './Login.css';
import logo from './img/gorro-de-cocinero.png'; 
import Header from './components/template/Header';
import Button from './components/login/Button';
import InputLogin from './components/login/InputLogin'; 
import Template from './template';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as LockIcon } from './img/lock-fill.svg'; 
import { ReactComponent as PersonIcon } from './img/person-vcard.svg'; 

const Login = () => {
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};

        if (number.length < 8 || number.length > 10) {
            errors.number = "El número de cédula debe tener entre 8 y 10 caracteres.";
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;
        if (!passwordRegex.test(password)) {
            errors.password = "La contraseña debe tener entre 8 y 16 caracteres, con mayúsculas, minúsculas y números.";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0; 
    
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            <div>
                <Template />
            </div>
        }
    };
    const handleNumberChange = (event) => {
        const value = event.target.value;
        if (/^\d{0,9}$/.test(value)) {
            setNumber(value);
        }
    };
    const handlePasswordChange = (event) => {
        const value = event.target.value;
        if (/^[A-Za-z\d]{0,16}$/.test(value)) {
            setPassword(value);
        }
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    };


    return (
        <>
            <Header /> 
            <div className="login-container">
                <div className="login-box">
                    <img src={logo} alt="Logo" className="logo" />
                    <h2>Iniciar sesión</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group" style={{ position: 'relative' }}>
                            <label>
                                <PersonIcon className="icon" />
                                <InputLogin 
                                type="text" 
                                placeholder="Número de identificación" 
                                value={number} 
                                onChange={handleNumberChange}
                                />
                            </label>
                            {errors.number && <div className="error-message">{errors.number}</div>}
                        </div>

                        <div className="input-group" style={{ position: 'relative' }}>
                            <label className="password-label">
                                <LockIcon className="icon" />
                                <InputLogin
                                    type={isPasswordVisible ? 'text' : 'password'}
                                    placeholder="Contraseña"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                <span
                                    onClick={togglePasswordVisibility}
                                    style={{ position: 'absolute', right: '10px', top: '50%', cursor: 'pointer', transform: 'translateY(-50%)' }}
                                >
                                    <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
                                </span>
                            </label>
                            {errors.password && <div className="error-message">{errors.password}</div>}
                        </div>
                        <Button 
                        type="Submit"
                        label="Acceder"/>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
