import React,{useState,useEffect} from 'react'

export default function Products() {
  return (
<>
 <h2 className="text-center">Products</h2>
 <div className="container ">
    <div className="row">
        <div className="col">
        <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
     <span className='card-name'>CardName</span> <span className='card-category'>Category</span> <br />
    <span className='card-price'>Price</span><span className='card-color ms-4'>Color</span> 
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        </div>
  
    </div>
    
 </div>

</>
  )
}
