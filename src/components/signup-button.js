// src/components/signup-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="btn btn-primary btn-block"  // Add your desired styling
      onClick={() =>
        loginWithRedirect({
          screen_hint: 'signup',  // Redirect to the signup screen
        })
      }
    >
      Sign Up
    </button>
  );
};

export default SignupButton;