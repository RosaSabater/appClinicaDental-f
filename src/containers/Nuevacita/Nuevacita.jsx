import React from 'react';
import axios from 'axios'
import './Nuevacita.scss';

const Nuevacita = () => {
    
    const handleSubmit = event =>{
        event.preventDefault(); // para evitar refrescar la página
        const cita ={

            fecha: event.target.fecha.value,
            usuarioId: event.target.usuarioId.value,
            motivo: event.target.motivo.value

        };
        axios.post('http://localhost:3001/areaclientes/nuevacita', cita)
        .then(res=>{
            console.log(res)
        })
        .catch(error=>console.log(error.response.data))
    }
    return (
        <form className="nuevacita-form" onSubmit={handleSubmit}>

            <input type="fecha" name="fecha" required placeholder="Elige una fecha" />
            <input type="motivo" name="motivo" required placeholder="Cuéntanos el motivo de tu cita" />
            <button type="submit">Pedir cita</button>

        </form>
    )
}

export default Nuevacita;