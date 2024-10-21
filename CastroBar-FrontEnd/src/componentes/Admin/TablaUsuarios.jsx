import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions,
  FormControl, InputLabel, Select, MenuItem, FormGroup, FormControlLabel, Checkbox
} from '@mui/material';

const TablaUsuarios = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    numeroDocumento: '',
    nombre: '',
    telefono: '',
    email: '',
    cargo: '',
    permisos: {
      registroOrdenes: false,
      pedidosDomicilios: false,
      registrarReserva: false,
      verInventario: false,
      bajasExistencias: false,
      productos: false,
      historialVentas: false,
      ventasPorCategorias: false,
      cerrarCaja: false,
      iniciar: false,
      numeroFacturas: false,
    },
  });

  const [usuarios, setUsuarios] = useState([
    {
      numeroDocumento: '23332464756',
      nombre: 'GUSTAVO ALONSO SOSA LONDOÑO',
      email: 'gustavosolo@hotmail.com',
      telefono: '3136828010',
      estado: 'Activo',
    },
    {
      numeroDocumento: '123456789',
      nombre: 'Juan Carlos Pérez González',
      email: 'juancperez@gmail.com',
      telefono: '3145678901',
      estado: 'Activo',
    },
  ]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData({
      numeroDocumento: '',
      nombre: '',
      telefono: '',
      email: '',
      cargo: '',
      permisos: {
        registroOrdenes: false,
        pedidosDomicilios: false,
        registrarReserva: false,
        verInventario: false,
        bajasExistencias: false,
        productos: false,
        historialVentas: false,
        ventasPorCategorias: false,
        cerrarCaja: false,
        iniciar: false,
        numeroFacturas: false,
      },
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      permisos: {
        ...prevData.permisos,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = () => {
    setUsuarios((prevUsuarios) => [...prevUsuarios, { ...formData, estado: 'Activo' }]);
    handleClose();
  };

  return (
    <TableContainer component={Paper} style={{ backgroundColor: '#f0f0f0' }}>
      <TextField label="Buscar..." variant="outlined" style={{ margin: '16px', width: '300px' }} />
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ margin: '16px' }}>
        Nuevo Usuario
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Número de Documento</TableCell>
            <TableCell>Nombre y Apellidos</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Teléfono</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usuarios.map((usuario, index) => (
            <TableRow key={index}>
              <TableCell>{usuario.numeroDocumento}</TableCell>
              <TableCell>{usuario.nombre}</TableCell>
              <TableCell>{usuario.email}</TableCell>
              <TableCell>{usuario.telefono}</TableCell>
              <TableCell>{usuario.estado}</TableCell>
              <TableCell>
                {/* Aquí puedes añadir botones de acción, como Editar o Eliminar */}
                <Button variant="outlined" color="primary">Editar</Button>
                <Button variant="outlined" color="secondary">Eliminar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Agregar Usuario</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Número de Documento"
            fullWidth
            name="numeroDocumento"
            value={formData.numeroDocumento}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Nombre y Apellidos"
            fullWidth
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Teléfono"
            fullWidth
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Email"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel id="cargo-label">Cargo</InputLabel>
            <Select
              labelId="cargo-label"
              name="cargo"
              value={formData.cargo}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Seleccionar...</em>
              </MenuItem>
              <MenuItem value="admin">Administrador</MenuItem>
              <MenuItem value="mesero">Mesero</MenuItem>
              <MenuItem value="cocinero">Cocinero</MenuItem>
            </Select>
          </FormControl>
          <h3>Permisos del Usuario en el Menú</h3>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="registroOrdenes" checked={formData.permisos.registroOrdenes} onChange={handleCheckboxChange} />}
              label="Registro de órdenes"
            />
            <FormControlLabel
              control={<Checkbox name="pedidosDomicilios" checked={formData.permisos.pedidosDomicilios} onChange={handleCheckboxChange} />}
              label="Pedidos a domicilio"
            />
            <FormControlLabel
              control={<Checkbox name="registrarReserva" checked={formData.permisos.registrarReserva} onChange={handleCheckboxChange} />}
              label="Registrar reserva"
            />
            <FormControlLabel
              control={<Checkbox name="verInventario" checked={formData.permisos.verInventario} onChange={handleCheckboxChange} />}
              label="Ver inventario"
            />
            <FormControlLabel
              control={<Checkbox name="bajasExistencias" checked={formData.permisos.bajasExistencias} onChange={handleCheckboxChange} />}
              label="Bajas existencias"
            />
            <FormControlLabel
              control={<Checkbox name="productos" checked={formData.permisos.productos} onChange={handleCheckboxChange} />}
              label="Productos"
            />
            <FormControlLabel
              control={<Checkbox name="historialVentas" checked={formData.permisos.historialVentas} onChange={handleCheckboxChange} />}
              label="Historial de ventas"
            />
            <FormControlLabel
              control={<Checkbox name="ventasPorCategorias" checked={formData.permisos.ventasPorCategorias} onChange={handleCheckboxChange} />}
              label="Ventas por categorías"
            />
            <FormControlLabel
              control={<Checkbox name="cerrarCaja" checked={formData.permisos.cerrarCaja} onChange={handleCheckboxChange} />}
              label="Cerrar caja"
            />
            <FormControlLabel
              control={<Checkbox name="iniciar" checked={formData.permisos.iniciar} onChange={handleCheckboxChange} />}
              label="Iniciar"
            />
            <FormControlLabel
              control={<Checkbox name="numeroFacturas" checked={formData.permisos.numeroFacturas} onChange={handleCheckboxChange} />}
              label="Número de Facturas"
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
};

export default TablaUsuarios;
