// src/components/login-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0(); // Obtén el método loginWithRedirect desde el hook de Auth0
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()} // Redirige a la página de login de Auth0
    >
      Log In
    </button>
  );
};

export default LoginButton;