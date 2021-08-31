import React from 'react'
import {Link} from 'react-router-dom'
const NavApp = () => {
    return (
        <>
        <nav ClassName="navbar navbar-expand-lg navbar-light bg-light">
 
  <button ClassName="navbar-toggler" type="button" data-toggle="collapse" data-target="anavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span ClassName="navbar-toggler-icon"></span>
  </button>

  <div ClassName="collapse navbar-collapse" id="navbarSupportedContent">
    <ul ClassName="navbar-nav mr-auto">
      <li ClassName="nav-item active">
        <Link ClassName="nav-link" to="/*">Inicio </Link>
      </li>
      <li ClassName="nav-item">
        <Link ClassName="nav-link" to="/add">Agregar Dogs</Link>
      </li>
      <li ClassName="nav-item">
        <Link ClassName="nav-link" to="/edit">Editar Dogs</Link>
      </li>
     
     
    </ul>
    <form ClassName="form-inline my-2 my-lg-0">
      <input ClassName="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button ClassName="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</>
    )
}

export default NavApp