import React from 'react';
import './NavBar.css'; // Importa tus estilos CSS aquí si los tienes

function Navbar({ isLoggedIn }) {
    return (
        <div className='navBar'>
            <ul className='leftList'>
                <li><a href="#">GameServers</a>
                    <div className='dropDown'>
                        <ul>
                            <li><a href="#">Minecraft</a></li>
                            <li><a href="#">Rust</a></li>
                            <li><a href="#">Arma 3</a></li>
                            <li><a href="#">FiveM</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#">TeamSpeak 3</a>
                    <div className='dropDown'>
                        <ul>
                            <li><a href="#">2GB</a></li>
                            <li><a href="#">4GB</a></li>
                            <li><a href="https://ferrari.com">6GB</a></li>
                            <li><a href="#">8GB</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#">Storage</a></li>
            </ul>
            <h1 className='titleNavBar'><a href="/">ZIPPH</a></h1>
            <ul className='rightList'>
                <li><a href="#">Dedicated Server</a>
                    <div className='dropDown'>
                        <ul>
                            <li><a href="#">2GB</a></li>
                            <li><a href="#">4GB</a></li>
                            <li><a href="#">6GB</a></li>
                            <li><a href="#">8GB</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#">Web Hosting</a>
                    <div className='dropDown'>
                        <ul>
                            <li><a href="#">2GB</a></li>
                            <li><a href="#">4GB</a></li>
                            <li><a href="#">6GB</a></li>
                            <li><a href="#">8GB</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#">Support</a></li>
            </ul>
            <div className='login_register'>
                {isLoggedIn ? (
                    <a href="/profile">Perfil</a>
                ) : (
                    <a href="/login-register/index.php">Únete</a>
                )}
            </div>
        </div>
    );
}

export default Navbar;