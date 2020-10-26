import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import './Header.scss';

const Header = ({ usuario, setShowModalLogin, setShowModalRegister }) => {

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

            { usuario && <div>
                <Link to="/areaclientes/logout">Cerrar sesión</Link>
            </div>}

        </header>
    );

}
export default Header;