import React, { useEffect } from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {

  useEffect(() => {
    if (!props.isAuthorized) props.isPopapOpen();
  }, [])

  return (
    <Route>
      {
        () => props.isAuthorized ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route >
  )
}

export default ProtectedRoute; 