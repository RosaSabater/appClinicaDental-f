import React from 'react';
import { Link } from 'react-router-dom'
import './Areaclientes.scss';

const Areaclientes = () => {

    let token = localStorage.getItem("token");

    if (!token) { return null }
    
    return (
        <header className="areaClientes">
            <Link to="/areaclientes/logout">Logout</Link>
            <Link to="/areaclientes/baja">Eliminar Cuenta</Link>
            <Link to="/areaclientes/nuevacita">Pedir Cita</Link>
            {/* <Link to="/areaclientes/citas/:id">Historial de citas</Link>
            <Link to="/areaclientes/cancelarcita/:id">Cancelar Cita</Link> */}
        </header>
    )
}
export default Areaclientes;