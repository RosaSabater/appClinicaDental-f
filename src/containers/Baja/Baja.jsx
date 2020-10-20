import React from 'react';
import axios from 'axios'
import './Baja.scss';

const Baja = () => {
    
    const handleSubmit = event =>{
        event.preventDefault(); // para evitar refrescar la página
        const usuario ={

            token: event.target.token.value

        };
        axios.delete('http://localhost:3001/areaclientes/baja', usuario)
        .then(res=>{
            console.log(res)
        })
        .catch(error=>console.log(error.response.data))
    }
    return (
        <form className="baja-form" onSubmit={handleSubmit}>

            <button type="submit">Eliminar cuenta</button>

        </form>
    )
}

export default Baja;