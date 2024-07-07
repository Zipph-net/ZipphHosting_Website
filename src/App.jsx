// App.jsx

import React from "react";
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

function App() {
  const planList = plans.map((plan, index) => (
    <CardPlans key={index} title={plan.name} description={plan.description} image={plan.image} />
  ));

  const offertList = offerts.map((offert, index) => (
    <CardOfferts key={index} title={offert.name} description={offert.description} price={offert.price} />
  ));

  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Offerts offertList={offertList} />
      <Products planList={planList} />
      <Footer />
      
    </div>
  );
}

export default App;