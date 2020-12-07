import React, { useEffect } from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {

  const isAuthorized = localStorage.getItem('jwt') ? true : false;

  useEffect(() => {
    if (!isAuthorized) props.isPopapOpen();
  }, [])

  return (
    <Route>
      {
        () => isAuthorized ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route >
  )
}

export default ProtectedRoute; 