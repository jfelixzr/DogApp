import React from 'react';
import ProTypes from 'prop-types';
import { Route,Redirect } from 'react-router-dom';
export const PublicRoute=({
    isAuthenticated,
    component:Component,
    ...rest
})=>{
    return(
        <Route {...rest}
        component={(props)=>((isAuthenticated)
            ?(<Redirect to="/" />)
            :(<Component {...props} />))}
        />
    )
}

PublicRoute.prototype={
    isAuthenticated:ProTypes.bool.isRequired, component:ProTypes.func.isRequired
}