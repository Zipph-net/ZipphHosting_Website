import React, { useState } from "react";
import "./App.css"; // Asegúrate de que esta ruta sea correcta

// Importar los componentes que se usarán en las rutas
import HomePage from "./components/MainPage/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Offerts from "./components/MainPage/Offerts/Offerts";
import Footer from "./components/MainPage/Footer/Footer";
import Info from "./components/MainPage/Info/Info";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);  // Cambiar el estado a 'true' cuando el usuario se loguea
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Cambiar el estado a 'false' cuando el usuario cierre sesión
  };

  return (
    <div className="App">
      {/* Pasar el estado de login a NavBar */}
      <NavBar isLoggedIn={isLoggedIn} />

      {/* Componentes de la aplicación que se muestran siempre */}
      <HomePage />
      <Offerts />
      <Footer />

      {/* Botones para probar el login y logout */}
      <button onClick={handleLogin}>Iniciar sesión</button>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}

export default App;