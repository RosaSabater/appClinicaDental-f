import React from 'react';
import axios from 'axios'
import './Registro.scss';
import { useHistory } from "react-router";
import { Input, Button } from 'antd';


const Registro = () => {

    const history = useHistory();

    const handleSubmit = async (event) => {

        try {
            event.preventDefault(); // para evitar refrescar la página

            const body = {

                nombre: event.target.nombre.value,
                apellidos: event.target.apellidos.value,
                telefono: event.target.telefono.value,
                email: event.target.email.value,
                password: event.target.password.value

            };
            
            await axios.post('http://localhost:3001/registro/', body);
            
            
            history.push('/login/');
            

        } catch (error) {
            console.log(error);
        }
        
    }
    

return (
    <form className="registro-form" onSubmit={handleSubmit}>

        <Input type="nombre" name="nombre" required placeholder="Introduce tu nombre" />
        <Input type="apellidos" name="apellidos" required placeholder="Introduce tus apellidos" />
        <Input type="telefono" name="telefono" required placeholder="Introduce tu telefono" />
        <Input type="email" name="email" required placeholder="Introduce tu email" />
        <Input type="password" name="password" required placeholder="Introduce tu contraseña" />

        <Button type="primary" htmlType="submit">Registrarse</Button>

    </form>
)
}

export default Registro;