import React from 'react';
import './Navbar.css'; // Asegúrate de importar tus estilos CSS aquí si los tienes

function Navbar() {
  return (
    <header className="header">
      <div className="contenedor__barra">
        <div className="menu_barra">
          <nav>
            <ul>
              <li><a href="../"></a></li> 
              <li><a href="plans">GameServer</a>
                <ul>
                  <li><a href="plans/minecraft">Minecraft</a></li>
                  <li><a href="plans/rust">Rust</a></li>
                  <li><a href="plans/arma3">Arma 3</a></li>
                  <li><a href="plans/fivem">FiveM</a></li>
                </ul>
              </li>
              <li><a href="#">TeamSpeak</a></li>
              <li><a href="#">DedicatedServer</a></li>
              <li><a href="#">WebHosting</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </nav>
        </div>
        <div className="login_register">
          <a href="../login-register/index.php">Unete</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;