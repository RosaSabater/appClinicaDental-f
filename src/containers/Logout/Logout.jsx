import React from 'react';
import axios from 'axios'
import './Logout.scss';
import { Button } from 'antd';

const Logout = ({ history }) => {

    const handleSubmit = async (event) => {

        try {
            event.preventDefault(); 

            const body = {

                token: event.target.token.value

            };

            await axios.get('http://localhost:3001/areaclientes/logout', body);

            localStorage.removeItem("token");

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