import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import plans from "./data/plans";
import PlanView from "./views/PlanView";

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