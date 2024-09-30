import React from 'react';
import './Alert.module.css';

const Alert = ({ message, type = 'success', onClose }) => {
    return (
        <div className={`alert alert-${type}`}>
            <span>{message}</span>
            <button onClick={onClose} className="close-alert">X</button>
        </div>
    );
};

export default Alert;
