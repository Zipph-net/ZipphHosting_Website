import React, { useState } from "react";
import "./App.css"; // Asegúrate de que esta ruta sea correcta

// Importar los componentes que se usarán en las rutas
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

function App() {
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
    <div className="App">
      {/* Pasar el estado de login a NavBar */}
      <NavBar isLoggedIn={isLoggedIn} />
      <HomePage />
      <Info />
      <Offerts offertList={offertList} />
      <Products planList={planList} />
      <Footer />

      <button onClick={handleLogin}>Iniciar sesión</button>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}

export default App;