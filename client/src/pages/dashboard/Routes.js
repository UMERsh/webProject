import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AddProducts from './AddProducts'
import Orders from './Orders'
import Products from './Products'
export default function Index() {
  return (

<>
 <BrowserRouter>
    <Routes>
        <Route path='/addproducts' Component={AddProducts}/>
        <Route path='/orders' Component={Orders}/>
        <Route path='/products' Component={Products}/>
    </Routes>
 </BrowserRouter>

</> 
   )
}
