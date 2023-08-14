import React from 'react';
import Logo from '../images/Logo.svg'

function Header() {
    return (
        <header className="header">
            <img src={Logo} className="logo" alt="Логотип" />
        </header>
    );
}

export default Header;