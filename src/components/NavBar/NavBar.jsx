import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';  // Importa useAuth0
import './NavBar.css'; // Importa tus estilos CSS aquí si los tienes


function Navbar() {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();  // Desestructuramos loginWithRedirect, logout e isAuthenticated de useAuth0

    return (
        <div className='navBar'>
            <ul className='leftList'>
                <li><a href="#">GameServers</a>
                    <div className='dropDown'>
                        <ul>
                            <li><a href="#">Minecraft</a></li>
                            <li><a href="#">Rust</a></li>
                            <li><a href="#">Arma&nbsp;3</a></li>
                            <li><a href="#">FiveM</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#">TeamSpeak&nbsp;3</a>
                    <div className='dropDown'>
                        <ul>
                            <li><a href="#">2GB</a></li>
                            <li><a href="#">4GB</a></li>
                            <li><a href="#">6GB</a></li>
                            <li><a href="#">8GB</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#">Storage</a></li>
            </ul>
            <h1 className='titleNavBar'><a href="/">ZIPPH</a></h1>
            <ul className='rightList'>
                <li><a href="#">Dedicated&nbsp;Server</a>
                    <div className='dropDown'>
                        <ul>
                            <li><a href="#">2GB</a></li>
                            <li><a href="#">4GB</a></li>
                            <li><a href="#">6GB</a></li>
                            <li><a href="#">8GB</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#">Web&nbsp;Hosting</a>
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
                {/* Botón de Login */}
                {!isAuthenticated ? (
                    <>
                        <button onClick={() => loginWithRedirect()} className="login-btn">
                            Login
                        </button>
                        {/* Botón de Sign Up */}
                        <button 
                            onClick={() => loginWithRedirect({ screen_hint: 'signup' })} 
                            className="signup-btn"
                        >
                            Sign Up
                        </button>
                    </>
                ) : (
                    // Si el usuario está autenticado, mostrar el botón de Logout
                    <button 
                        onClick={() => logout({ returnTo: window.location.origin })} 
                        className="logout-btn"
                    >
                        Log Out
                    </button>
                )}
            </div>
        </div>
    );
}

export default Navbar;