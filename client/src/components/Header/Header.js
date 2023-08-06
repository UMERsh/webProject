import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
<>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand" >Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/dashboard" class="nav-link active" aria-current="page">Deshboard</Link>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li> */}
        {/* <li class="nav-item dropdown">
          <Link to="/dashboard" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Deshboard
          </Link>
          <ul class="dropdown-menu">
            <li><Link to="/products" class="dropdown-item" >Products</Link></li>
            <li><Link to="/addproducts" class="dropdown-item" >ADD Products</Link></li>
            <li><Link to="/orders" class="dropdown-item" >Orders</Link></li>
            <li><hr class="dropdown-divider" /></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form class="d-flex" role="search">
       <Link to="/login"> <button class="btn btn-outline-success" type="submit">Login</button></Link>
      </form>
    </div>
  </div>
</nav>
</> 
 )
}
