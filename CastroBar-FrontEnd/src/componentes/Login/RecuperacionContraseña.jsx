import React, { useState } from "react";

const RecuperarContraseña =()=>{
    const correo=useState("")
    return (
        <section>
            <h1>Recupera tu contraseña</h1>
            <form>
                <input
                type="text"
                onChange={e = correo(e.target.value)}
                />
                <button>Enviar correo</button>
            </form>
        </section>
    )
}

export default RecuperarContraseña