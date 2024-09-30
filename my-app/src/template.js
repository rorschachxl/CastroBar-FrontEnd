import React from 'react';

const template = () => {
    return (
        <div>
            <h2>Iniciar sesión</h2>
            <form>
                <input type="text" placeholder="Número de identificación" />
                <input type="password" placeholder="Contraseña" />
                <button type="submit">Acceder</button>
            </form>
        </div>
    );
};

export default template;
