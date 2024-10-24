import PropTypes from "prop-types";
import React from "react";
import "../../estilos/Login/InputLogin.scss";

const InputLogin = ({ type, placeholder, value, onChange }) => {
    return (
        <input
            className="inputfield"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

InputLogin.propTypes = {
    type: PropTypes.oneOf(["password", "text"]).isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

InputLogin.defaultProps = {
    type: "text",
    placeholder: "Ingrese valor",
    value: "",
    onChange: () => { },
};

export default InputLogin;