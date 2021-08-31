import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../components/auth/Login'
import Registro from '../components/auth/Registro'
import { SearchScreen } from '../components/movies/SearchApp';

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        exact
                        path="/auth/login"
                        component={ Login }
                    />

                    <Route 
                        exact
                        path="/auth/register"
                        component={ Registro }
                    />
                     <Route 
                        exact
                        path="search"
                        component={ SearchScreen }
                    />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>

        </div>
    )
}