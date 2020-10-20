import React from 'react';
import axios from 'axios'
import './Logout.scss';

const Logout = () => {
    
    const handleSubmit = event =>{
        event.preventDefault(); // para evitar refrescar la página
        const nuevoUsuario ={

            token: event.target.token.value

        };
        axios.get('http://localhost:3001/areaclientes/logout', nuevoUsuario)
        .then(res=>{
            console.log(res)
        })
        .catch(error=>console.log(error.response.data))
    }
    return (
        <form className="logout-form" onSubmit={handleSubmit}>

            <button type="submit">Cerrar sesión</button>

        </form>
    )
}

export default Logout;