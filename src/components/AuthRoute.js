import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute (props) {

  const { 
    component: Component,
    isAuthenticated=false, 
    ...restProps 
  } = props;

  return (
    <Route { ...restProps } 
      render={ 
        props => isAuthenticated ? <Component { ...props } /> : <Redirect to="/" />
      }
    />
  );

}

export default AuthRoute;
