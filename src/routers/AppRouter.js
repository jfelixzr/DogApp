import React from 'react'


import NavApp from '../components/NavApp'
import {BrowserRouter as Router,
Switch,

Route} from 'react-router-dom'


import EditRecipe from '../components/EditRecipe'
import AddRecipe from '../components/AddRecipe'
import ShowRecipe from '../components/ShowRecipe'
import Login from '../components/login/Login'
import Registro from '../components/login/Registro'
const RouterApp = () => {
    return (
        <>
        <Router>
        <NavApp />
        
        <Switch>
        <Route exact path="/edit/:id" component={EditRecipe} />
        
        <Route exact path="/add" component={AddRecipe} />
        <Route exact path="/inicio" component={ShowRecipe} />
        <Route exact path="/login" component={Login} />

        <Route exact path="/registro" component={Registro} />
        </Switch>
        </Router>

</>
    )
}

export default RouterApp