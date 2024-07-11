import React, { useState } from 'react';
import './NavBar.css'; // Importa tus estilos CSS aquí si los tienes

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Función para alternar la visibilidad del menú
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Función para cerrar el menú cuando se hace clic en un enlace
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="contenedor__barra">
                <div className="menu_barra1">
                    <nav className={menuOpen ? 'active' : ''}>
                        <ul>
                            <li><a href="#" onClick={closeMenu}>Game&nbsp;Servers</a>
                                <ul>
                                    <li><a href="plans/minecraft">Minecraft</a></li>
                                    <li><a href="plans/rust">Rust</a></li>
                                    <li><a href="plans/arma3">Arma&nbsp;3</a></li>
                                    <li><a href="plans/fivem">FiveM</a></li>
                                </ul>
                            </li>
                            <li><a href="#" onClick={closeMenu}>TeamSpeak&nbsp;3</a></li>
                            <li><a href="#" onClick={closeMenu}>Storage</a></li>
                        </ul>
                    </nav>
                </div>

                <h2 className="titleNav">
                    <a href="../../../../../../../../" className='titleNav'>
                        ZIPPH
                    </a>
                </h2>

                <div className='menu_barra2'>  
                    <nav>
                        <ul>
                            <li><a href="#" onClick={closeMenu}>Dedicated&nbsp;Server</a></li>
                            <li><a href="#" onClick={closeMenu}>WebHosting</a></li>
                            <li><a href="#" onClick={closeMenu}>Support</a></li>
                        </ul>
                    </nav>   
                </div>

                <div className="login_register">
                    <a href="../login-register/index.php">Unete</a>
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>☰</button>
            </div>
        </header>
    );
}

export default Navbar;