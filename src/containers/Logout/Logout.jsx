import React from 'react';
import axios from 'axios'
import { useHistory } from "react-router";
import './Logout.scss';
import { Button, notification } from 'antd';

const Logout = ({ setUsuario, usuario }) => {

    const history = useHistory();

    const handleSubmit = async (event) => {

        try {
            const body = {
                headers: { Authorization: `${usuario?.token}` }
            };

            localStorage.removeItem("usuario");
            
            setUsuario(null)
            
            history.push('/');
            
            await axios.get(`${process.env.REACT_APP_APIURL}/areaclientes/logout`, body);

        } catch (error) {
            console.log(error);
            notification.error({ message: 'Error al cerrar sesión', description: 'Intentenlo de nuevo más tarde.' });
        }
    }
    return (
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>Cerrar sesión</Button>
    )
}

export default Logout;