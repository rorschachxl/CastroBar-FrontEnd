import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({ type, placeholder, value, onChange }) => {
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

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'password', 'number']).isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
    type: 'text',
    placeholder: 'Ingrese valor',
    value: '',
    onChange: () => { },
};

export default Input;

