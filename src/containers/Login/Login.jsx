
import React from 'react';
import axios from 'axios'
import './Login.scss';
import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Login = ({ history }) => {

    const handleSubmit = async (event) => {

        try {
            event.preventDefault(); // para evitar refrescar la página
            const body = {

                email: event.target.email.value,
                password: event.target.password.value

            };
            
            let respuesta = await axios.post('http://localhost:3001/areaclientes/login', body);

            let token = respuesta.data.token;
            localStorage.setItem("token", token);

            history.push('/');

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="padrelogin">
            <form className="login-form" onSubmit={handleSubmit}>
                <Input type="email" name="email" placeholder="Email" prefix={<UserOutlined />} />
                <Input.Password name="password" placeholder="input password" />
                <Button type="primary" htmlType="submit">Iniciar Sesión</Button>
            </form>
        </div>
    )
}

export default Login;