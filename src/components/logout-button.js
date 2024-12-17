// src/components/logout-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();  // Desestructuramos logout de useAuth0

  return (
    <button
      className="btn btn-danger btn-block"
      onClick={() =>
        logout({
          returnTo: window.location.origin,  // Redirige a la URL de la aplicación después de salir
        })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;