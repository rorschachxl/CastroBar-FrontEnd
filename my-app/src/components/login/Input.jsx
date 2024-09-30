import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({ type, placeholder, value, onChange }) => {

    const handleChange = (e) => {
        const inputValue = e.target.value;

        // Validar el valor ingresado según el tipo
        if (type === 'number') {
            const regex = /^[0-9]*$/;
            if (regex.test(inputValue)) {
                onChange(e); // Llama a la función onChange solo si es válido
            }
        } else if (type === 'text') {
            const regex = /^[a-zA-Z\s]*$/; // Solo letras y espacios
            if (regex.test(inputValue)) {
                onChange(e);
            }
        } else if (type === 'password') {
            const regex = /^[a-zA-Z0-9]*$/;
            if (regex.test(inputValue)) {
                onChange(e);
            }
        }
    };

    return (
        <input
            className={styles.inputfield}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange} // Asigna la función de validación
        />
    );
};

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'password', 'number']).isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired, // onChange es requerido
};

Input.defaultProps = {
    value: '',
};

export default Input;

