import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import './Header.scss';

const Header = ({ usuario, setShowModalLogin, setShowModalRegister }) => {

    if (!usuario) {
        return (
            <header className="header">
                <Link to="/">Home</Link>
                <Button type="link" onClick={()=>setShowModalRegister(true)}>Registrarse</Button>
                <Button type="link" onClick={()=>setShowModalLogin(true)}>Acceder</Button>
            </header>
        )
    } else {
        return (
            <header className="header">
                <Link to="/">Home</Link>
                <Link to="/areaclientes">Area clientes</Link>
            </header>
        )
    }
}
export default Header;