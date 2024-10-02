import PropTypes from "prop-types";
import React from "react";
import styles from "./InputLogin.module.css";

const InputLogin = ({ type, placeholder, value, onChange }) => {
    return (
        <input
            className={styles.inputfield}
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
