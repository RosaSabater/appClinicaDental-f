import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Button, notification } from 'antd';
import axios from 'axios';
import './Header.scss';

const Header = ({ usuario, setUsuario, setShowModalLogin, setShowModalRegister }) => {

    const esAdmin = usuario?.rol === 'admin';

    const history = useHistory();

    const logout = async (event) => {

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
    };

    return (
        <header className="header">
            <div>
                <Link to="/">Home</Link>
                {!usuario && <>
                    <Button type="link" onClick={() => setShowModalRegister(true)}>Registrarse</Button>
                    <Button type="link" onClick={() => setShowModalLogin(true)}>Acceder</Button>
                </>}
                {usuario && <Link to="/areaclientes/citas">Area clientes</Link>}
            </div>

            <div className="menuDer">
                {usuario && <div>
                    <Button type="link" onClick={logout}>Cerrar sesión</Button>
                </div>}
                {esAdmin && <div>
                    <Link to="/admin/mostrarUsuarios">Clientes</Link>
                </div>}
                {esAdmin && <div>
                    <Link to="/admin/mostrarCitas">Citas concertadas</Link>
                </div>}
            </div>
        </header>
    );

}
export default Header;