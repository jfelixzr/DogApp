import React from 'react';
import ProTypes from 'prop-types';
import { Route,Redirect } from 'react-router-dom';
export const PrivateRoute=({
    isAuthenticated,
    component:Component,
    ...rest
})=>{
    return(
        <Route {...rest}
        component={(props)=>((isAuthenticated)
            ?(<Component {...props} />)
            :(<Redirect to="/auth/login" />))}
        />
    )
}

PrivateRoute.prototype={
    isAuthenticated:ProTypes.bool.isRequired, component:ProTypes.func.isRequired
}