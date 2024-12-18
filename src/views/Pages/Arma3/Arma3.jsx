import React from 'react';
import NavBar from '../../../components/NavBar/NavBar'; 
import Footer from '../../../components/MainPage/Footer/Footer';
import './Arma3.css';

function Arma3() {
    return (
        <div>
            {/* Llamas a la NavBar aquí */}
            <NavBar />
            
            <div className='arma3-main'>
                <h1>Welcome to the Arma 3 Page</h1>
            </div>
            <Footer />
        </div>
    );
}

export default Arma3;