import React from 'react';
import NavBar from '../../../components/NavBar/NavBar'; 
import Footer from '../../../components/MainPage/Footer/Footer';
import './Rust.css';

function Rust() {
    return (
        <div>
            {/* Llamas a la NavBar aquí */}
            <NavBar />
            
            <div className='rust-main'>
                <h1>Welcome to the Rust Page</h1>
            </div>
            <Footer />
        </div>
    );
}

export default Rust;