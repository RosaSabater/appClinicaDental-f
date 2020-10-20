import React from 'react';
import axios from 'axios'
import './Registro.scss';

const Registro = () => {
    
    const handleSubmit = event =>{
        event.preventDefault(); // para evitar refrescar la página
        const nuevoUsuario ={

            nombre: event.target.nombre.value,
            apellidos: event.target.apellidos.value,
            telefono: event.target.telefono.value,
            email:event.target.email.value,
            password:event.target.password.value

        };
        axios.post('http://localhost:3001/registro', nuevoUsuario)
        .then(res=>{
            console.log(res)
        })
        .catch(error=>console.log(error.response.data))
    }
    return (
        <form className="registro-form" onSubmit={handleSubmit}>

            <input type="nombre" name="nombre" required placeholder="Introduce tu nombre" />
            <input type="apellidos" name="apellidos" required placeholder="Introduce tus apellidos" />
            <input type="telefono" name="telefono" required placeholder="Introduce tu telefono" />
            <input type="email" name="email" required placeholder="Introduce tu email" />
            <input type="password" name="password" required placeholder="Introduce tu contraseña"/>
            <button type="submit">Registrarse</button>

        </form>
    )
}

export default Registro;