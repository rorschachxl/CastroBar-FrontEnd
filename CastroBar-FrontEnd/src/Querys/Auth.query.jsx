import axios from "axios";

export const URL = "https://89wjm2s3-5190.use.devtunnels.ms/"

export let token;
export let usuarioActual;
// Inicio de session 

export async function InicioUser(data) {
    const result = await axios.post(`${URL}IniciarSesion`, {
        numeroDocumento: data.documentNumber,
        contraseña: data.password
    })
    token = result.data.Token
    usuarioActual = result.data
    return result
}


// crea un nuevo usuario
export async function NuevoUser(data) {
    const result = await axios.post(`${URL}/User/SigIn`, {
        userName: data.name,
        email: data.email,
        phone: data.telefono,
        password: data.pass
    })
    token = result.data.Token
    localStorage.setItem('token', token);
    return result
}