import React from 'react'

import ListarDog from '../components/ListarDog'
import EditDog from '../components/EditDog'
import FormAdd from '../components/FormAdd'
import NavApp from '../components/NavApp'
import {BrowserRouter as Router,
Switch,

Route} from 'react-router-dom'
import MostrarDog from '../components/MostrarDog'
const RouterApp = () => {
    return (
        <>
        <Router>
        <NavApp />
        <img src="https://res.cloudinary.com/db9wh5uvt/image/upload/v1625536708/perros_e1bfpk.png" 
                             className="App-logo " 
                             alt="logo" />
        <Switch>
        <Route exact path="/edit/:id" component={EditDog} />
        
        <Route exact path="/add" component={FormAdd} />
        <Route exact path="/*" component={MostrarDog} />
        </Switch>
        </Router>

</>
    )
}

export default RouterApp