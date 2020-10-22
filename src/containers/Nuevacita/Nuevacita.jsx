import React from 'react';
import axios from 'axios'
import './Nuevacita.scss';
import {DatePicker, Input, Button } from 'antd';

const Nuevacita = () => {

    const handleSubmit = event => {
        event.preventDefault(); // para evitar refrescar la página
        const cita = {

            fecha: event.target.fecha.value,
            usuarioId: event.target.usuarioId.value,
            motivo: event.target.motivo.value

        };
        axios.post('http://localhost:3001/areaclientes/nuevacita', cita)
            .then(res => {
                console.log(res)
            })
            .catch(error => console.log(error.response.data))
    }
    return (
        <form className="nuevacita-form" onSubmit={handleSubmit}>

            <DatePicker type="fecha" name="fecha" style={{ width: '100%' }} />
            <Input type="motivo" name="motivo" required placeholder="Cuéntanos el motivo de tu cita" />
            <Button type="primary" htmlType="submit">Registrarse</Button>

        </form>
    )
}

export default Nuevacita;