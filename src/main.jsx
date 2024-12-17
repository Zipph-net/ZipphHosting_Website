import React from "react";
import ReactDOM from "react-dom/client"; // Importa createRoot desde react-dom/client
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react"; // Importa Auth0Provider
import App from "./App";
import "./index.css";
import plans from "./data/data_plans";
import PlanView from "./views/Plans/PlanView";
import offerts from "./data/data_plans";
import OffertView from "./views/Plans/PlanView";

// Reemplaza con tu propio dominio y Client ID de Auth0
const domain = "dev-ve3vp7fz0xmfcgnb.us.auth0.com";
const clientId = "DBIGS0GHAdf2owBsePPbyO92m4vyhB7W";

// Prepara las rutas de la aplicación
const routes = [
  {
    path: "/",
    element: <App />,
  },
];

plans.forEach((plan) => {
  routes.push({
    path: `/${plan.name}`,
    element: <PlanView plan={plan} />,
  });
});

offerts.forEach((offert) => {
  routes.push({
    path: `/${offert.name}`,
    element: <OffertView offerts={offert} />,
  });
});

// Usar createRoot en lugar de ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <Router> {/* Asegúrate de que solo haya un <Router> */}
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </Auth0Provider>
  </React.StrictMode>
);