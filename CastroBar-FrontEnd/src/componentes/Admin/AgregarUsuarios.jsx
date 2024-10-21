import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const AgregarUsuario = ({ open, onClose, onSubmit }) => {
    const [nuevoUsuario, setNuevoUsuario] = useState({
        nombre: '',
        email: '',
        telefono: '',
        documento: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoUsuario({ ...nuevoUsuario, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(nuevoUsuario);
        setNuevoUsuario({ nombre: '', email: '', telefono: '', documento: '' }); // Resetea el formulario
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Agregar Usuario</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    name="documento"
                    label="Número de Documento"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={nuevoUsuario.documento}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    name="nombre"
                    label="Nombres y Apellidos"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={nuevoUsuario.nombre}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    name="telefono"
                    label="Teléfono"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={nuevoUsuario.telefono}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="outlined"
                    value={nuevoUsuario.email}
                    onChange={handleInputChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancelar
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Agregar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AgregarUsuario;
