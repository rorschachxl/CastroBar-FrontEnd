import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'Name',
        role: 'Rol',
    });

    const fetchUserData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/'); 
            setUser(response.data); 
        } catch (error) {
            console.error("Error al recuperar los datos del usuario:", error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};