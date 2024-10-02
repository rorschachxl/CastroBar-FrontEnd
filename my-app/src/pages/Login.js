import React, { useEffect, useState, useMemo } from "react";
import md5 from "md5";
import axios from "axios";
import Cookies from "universal-cookie";
import "../css/Login.css";
import logo from "../img/gorro-de-cocinero.png";
import Header from "../components/template/Header";
import Button from "../components/login/Button";
import InputLogin from "../components/login/InputLogin";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as LockIcon } from "../img/lock-fill.svg";
import { ReactComponent as PersonIcon } from "../img/person-vcard.svg";

function Login(props) {
    const baseUrl = "http://localhost:3000/";

    const cookies = useMemo(() => new Cookies(), []);

    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleNumberChange = (e) => {
        const value = e.target.value;
        if (/^\d{0,10}$/.test(value)) {
            setNumber(value);
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        if (/^[A-Za-z\d]{0,16}$/.test(value)) {
            setPassword(value);
        }
    };

    const validateForm = () => {
        const errors = {};

        if (number.length < 8 || number.length > 10) {
            errors.number =
                "El número de identificación debe tener entre 8 y 10 caracteres.";
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;
        if (!passwordRegex.test(password)) {
            errors.password =
                "La contraseña debe tener entre 8 y 16 caracteres, con mayúsculas, minúsculas y números.";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const iniciarSesion = async (event) => {
        event.preventDefault();

        if (validateForm()) {
            try {
                const response = await axios.get(
                    baseUrl + `/${number}/${md5(password)}`
                );
                if (response.data.length > 0) {
                    const respuesta = response.data[0];
                    cookies.set("id", respuesta.id, { path: "/" });
                    cookies.set("number", respuesta.number, { path: "/" });
                    cookies.set("password", respuesta.password, { path: "/" });
                    props.history.push("/template");
                } else {
                    alert("Credenciales incorrectas");
                }
            } catch (error) {
                console.log(error);
                alert("Error en la autenticación");
            }
        }
    };

    useEffect(() => {
        if (cookies.get("id")) {
            props.history.push("/template");
        }
    }, [cookies, props.history]);

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
                    <form>
                        <div className="input-group" style={{ position: "relative" }}>
                            <label>
                                <PersonIcon className="icon" />
                                <InputLogin
                                    type="text"
                                    placeholder="Número de identificación"
                                    name="number"
                                    value={number}
                                    onChange={handleNumberChange}
                                />
                            </label>
                            {errors.number && (
                                <div className="error-message">{errors.number}</div>
                            )}
                        </div>

                        <div className="input-group" style={{ position: "relative" }}>
                            <label className="password-label">
                                <LockIcon className="icon" />
                                <InputLogin
                                    type={isPasswordVisible ? "text" : "password"}
                                    placeholder="Contraseña"
                                    name="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                <span
                                    onClick={togglePasswordVisibility}
                                    style={{
                                        position: "absolute",
                                        right: "10px",
                                        top: "50%",
                                        cursor: "pointer",
                                        transform: "translateY(-50%)",
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={isPasswordVisible ? faEyeSlash : faEye}
                                    />
                                </span>
                            </label>
                            {errors.password && (
                                <div className="error-message">{errors.password}</div>
                            )}
                        </div>
                        <Button
                            label="Acceder"
                            onClick={iniciarSesion}
                        />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
