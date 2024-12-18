import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';  // Importa useAuth0
import './NavBar.css'; // Importa tus estilos CSS aquí si los tienes


function Navbar() {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();  // Desestructuramos loginWithRedirect, logout e isAuthenticated de useAuth0

    return (
        <div className='navBar'>
            <ul className='leftList'>
                <li><Link to="/maintenance">GameServers</Link>
                    <div className='dropDown'>
                        <ul>
                            <li><Link to="/minecraft">Minecraft</Link></li>
                            <li><Link to="/rust">Rust</Link></li>
                            <li><Link to="/arma-3">Arma&nbsp;3</Link></li>
                            <li><Link to="/fivem">FiveM</Link></li>
                        </ul>
                    </div>
                </li>
                <li><Link to="/maintenance">TeamSpeak&nbsp;3</Link>
                    <div className='dropDown'>
                        <ul>
                            <li><Link to="/maintenance">2GB</Link></li>
                            <li><Link to="/maintenance">4GB</Link></li>
                            <li><Link to="/maintenance">6GB</Link></li>
                            <li><Link to="/maintenance">8GB</Link></li>
                        </ul>
                    </div>
                </li>
                <li><Link to="/maintenance">Storage</Link></li>
            </ul>
            <h1 className='titleNavBar'><Link to="/">ZIPPH</Link></h1>
            <ul className='rightList'>
                <li><Link to="/maintenance">Dedicated&nbsp;Server</Link>
                    <div className='dropDown'>
                        <ul>
                            <li><Link to="/maintenance">2GB</Link></li>
                            <li><Link to="/maintenance">4GB</Link></li>
                            <li><Link to="/maintenance">6GB</Link></li>
                            <li><Link to="/maintenance">8GB</Link></li>
                        </ul>
                    </div>
                </li>
                <li><Link to="/maintenance">Web&nbsp;Hosting</Link>
                    <div className='dropDown'>
                        <ul>
                            <li><Link to="/maintenance">2GB</Link></li>
                            <li><Link to="/maintenance">4GB</Link></li>
                            <li><Link to="/maintenance">6GB</Link></li>
                            <li><Link to="/maintenance">8GB</Link></li>
                        </ul>
                    </div>
                </li>
                <li><Link to="/maintenance">Support</Link></li>
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