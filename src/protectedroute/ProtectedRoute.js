import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getUserInfo } from "../localstorage/localstorage";

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const data = getUserInfo();

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        data !== null ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
