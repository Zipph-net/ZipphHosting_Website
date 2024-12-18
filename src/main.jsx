import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";
import routesConfig from "./routesConfig"; // Archivo centralizado de rutas

// Reemplaza con tu propio dominio y Client ID de Auth0
const domain = "dev-ve3vp7fz0xmfcgnb.us.auth0.com";
const clientId = "DBIGS0GHAdf2owBsePPbyO92m4vyhB7W";

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
          {/* Ruta principal que renderiza el componente App */}
          <Route path="/" element={<App />} />
          
          {/* Configurar las rutas a partir del archivo routesConfig */}
          {routesConfig.map((route, index) => (
            <Route 
              key={index} 
              path={route.path} 
              element={<route.component />} 
            />
          ))}
        </Routes>
      </Router>
    </Auth0Provider>
  </React.StrictMode>
);