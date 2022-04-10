import React from 'react';
import { Button } from 'react-bootstrap';

const Login = () => {
  const google = () => {
    window.open('http://localhost:8000/auth/google', '_self');
  };
  const facebook = () => {
    window.open('http://localhost:8000/auth/facebook', '_self');
  };

  return (
    <div className="p-3 row">
      <div className="mb-3">
        <Button onClick={google}>Google</Button>
      </div>

      <div>
        <Button onClick={facebook}>Facebook</Button>
      </div>
    </div>
  );
};

export default Login;
