import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './frontend/Home'
import Header from '../components/Header/Header'
import Add from './Apps/Add'
import Products from './dashboard/Products'
import AddProducts from './dashboard/AddProducts'
import Orders from './dashboard/Orders'
import Login from './auth/Login'
import Register from './auth/Register'
import Dashboard from './dashboard/Dashboard'
export default function Index() {
  return (
<BrowserRouter>
 <Header />
    <Routes>
        <Route path='/' Component={Home} />
        <Route path='/add' Component={Add} />
        <Route path='/products' Component={Products} />
        <Route path='/addproducts' Component={AddProducts} />
        <Route path='/orders' Component={Orders} />
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Register} />
        <Route path='/dashboard' Component={Dashboard} />
    </Routes>
</BrowserRouter>
    )
}
