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
                <div className="menu_barra">
                  <nav className={menuOpen ? 'active' : ''}>
                      <ul>
                          <li><a href="../../../../"></a></li>
                          <li><a href="#" onClick={closeMenu}>GameServer</a>
                              <ul>
                                  <li><a href="plans/minecraft">Minecraft</a></li>
                                  <li><a href="plans/rust">Rust</a></li>
                                  <li><a href="plans/arma3">Arma 3</a></li>
                                  <li><a href="plans/fivem">FiveM</a></li>
                              </ul>
                          </li>
                          <li><a href="#" onClick={closeMenu}>TeamSpeak</a></li>
                          <li><a href="#" onClick={closeMenu}>DedicatedServer</a></li>
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