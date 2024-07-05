// App.jsx

import React from "react";
import "./App.css";
import Card from "./components/Others/Card";
import plans from "./data/plans";
import HomePage from "./components/MainPage/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Offerts from "./components/MainPage/Offerts/Offerts";
import Products from "./components/MainPage/Products/Products";
import Footer from "./components/MainPage/Footer/Footer";

function App() {
  const planList = plans.map((plan, index) => (
    <Card key={index} title={plan.name} description={plan.description} image={plan.image} />
  ));

  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Offerts />
      <Products planList={planList} />
      <Footer />
      
    </div>
  );
}

export default App;