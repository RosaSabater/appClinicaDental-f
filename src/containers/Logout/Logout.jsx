import React from 'react';
import axios from 'axios'
import { useHistory } from "react-router";
import './Logout.scss';
import { Button } from 'antd';

const Logout = ({ setUsuario }) => {

    const history = useHistory();

    const handleSubmit = async (event) => {

        try {
            event.preventDefault(); 

            let usuarioStorage = JSON.parse(localStorage.getItem("usuario"));
            
            const body = {
                headers: { Authorization: `${usuarioStorage.token}` }
            };

            await axios.get('http://localhost:3001/areaclientes/logout', body);

            localStorage.removeItem("usuario");

            setUsuario(null)
            history.push('/');

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form className="logout-form" onSubmit={handleSubmit}>
            <Button type="primary" htmlType="submit">Cerrar sesión</Button>
        </form>
    )
}

export default Logout;