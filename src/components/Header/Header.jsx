
import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';

const Header = ({usuario}) => {

    if (!usuario) {
        return (
            <header className="header">
                <Link to="/">Home</Link>
                <Link to="/registro">Registrarse</Link>
                <Link to="/login">Acceder</Link>
            </header>
        )
    }else {
        return (
            <header className="header">
                <Link to="/">Home</Link>
                <Link to="/areaclientes">Area clientes</Link>
            </header>
        )
    }
}
export default Header;