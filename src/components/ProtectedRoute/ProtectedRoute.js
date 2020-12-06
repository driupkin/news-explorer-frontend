import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {

  const isAuthorized = localStorage.getItem('jwt') ? true : false;

  return (
    <Route>
      {
        () => isAuthorized ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route >
  )
}

export default ProtectedRoute; 