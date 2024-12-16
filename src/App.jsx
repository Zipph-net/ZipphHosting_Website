import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CardPlans from "./components/Others/CardPlans/CardPlans";
import CardOfferts from "./components/Others/CardOfferts/CardOfferts";
import plans from "./data/data_plans";
import offerts from "./data/data_offerts";
import HomePage from "./components/MainPage/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Offerts from "./components/MainPage/Offerts/Offerts";
import Products from "./components/MainPage/Products/Products";
import Footer from "./components/MainPage/Footer/Footer";
import Info from "./components/MainPage/Info/Info";
import LoginRegisterPage from "../public/login-register/php/login_usuario_be.php"; // Agrega el componente para login/register

function App() {
  // Definir el estado de login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);  // Cambiar el estado a 'true' cuando el usuario se loguea
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Cambiar el estado a 'false' cuando el usuario cierre sesión
  };

  const planList = plans.map((plan, index) => (
    <CardPlans key={index} title={plan.name} description={plan.description} image={plan.image} price={plan.price} />
  ));

  const offertList = offerts.map((offert, index) => (
    <CardOfferts key={index} title={offert.name} description={offert.description} price={offert.price} priceNormal={offert.priceNormal} />
  ));

  return (
    <Router>
      <div className="App">
        <NavBar isLoggedIn={isLoggedIn} /> {/* Pasar el estado de login */}
        
        {/* Definir las rutas dentro de Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login-register" element={<LoginRegisterPage />} />
          <Route path="/info" element={<Info />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
        
        <Offerts offertList={offertList} />
        <Products planList={planList} />
        <Footer />

        {/* Botones para probar el login y logout */}
        <button onClick={handleLogin}>Iniciar sesión</button>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </Router>
  );
}

export default App;