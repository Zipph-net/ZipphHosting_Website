import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import plans from "./data/data_plans";
import PlanView from "./views/Plans/PlanView";
import offerts from "./data/data_plans";
import OffertView from "./views/Plans/PlanView";

const routes = [
  {
    path: "/",
    element: <App />,
  },
];

plans.forEach((plan) => {
  routes.push({
    path: `/${plan.name}`, // Asegúrate de que la ruta tenga un formato correcto aquí
    element: <PlanView plan={plan} />,
  });
});

offerts.forEach((offerts) => {
  routes.push({
    path: `/${offerts.name}`, // Asegúrate de que la ruta tenga un formato correcto aquí
    element: <OffertView offerts={offerts} />,
  });
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);