import React,{useState} from 'react'
import { Layout, Menu, Button, theme } from 'antd';



const initialState = {
  name: "",
  category: "",
  description: "",
  price: "",
  color: "",
  size: "",
  image1: "",
  stock: ""
}
export default function AddProducts() {
 const[state,setState] = useState(initialState)
  const[isLoading,setIsLoading] = useState(false)

  const handleChange = (e)=>{
    setState(s=>({...s,[e.target.name]: e.target.value}))

  }
  const handleSubmit = (e)=>{
    e.preventDeafult();
  }
  return (
<>
<div className="container my-5 ">
        <div className="row ">
          <div className="col">
            <div className="card rounded-4 shadow-lg border-0 pb-5 px-3 px-md-4">
              <h1 className='pt-3 pb-5 fw-bold text-info'>Add Products</h1>
              <form onSubmit={handleSubmit} >

                {/*  name */}
                <div className="row row-cols-1 row-cols-md-2 mb-3">
                  <div className="col">
                    <label htmlFor="employe_name" className="form-label"> Name<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="name" name='name' value={state.name} onChange={handleChange} required />
                  </div>

                  {/* category  */}
                  <div className="col mt-3 mt-md-0">
                    <label htmlFor="business_unit" className="form-label"> Category</label>
                    <input type="text" className="form-control" id="category" name='category' value={state.category} onChange={handleChange} required  />
                  </div>
                </div>
                {/* description*/}
                <div className="row row-cols-1 row-cols-md-2 mb-3">
                  <div className="col">
                    <label htmlFor="staf_group" className="form-label">Description<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="description" name='description' value={state.description} onChange={handleChange} required placeholder='' />
                  </div>
                  {/* //price */}
                  <div className="col mt-3 mt-md-0">
                    <label htmlFor="designation" className="form-label">Price<span className="text-danger">*</span></label>
                    <input type="number" className="form-control" id="price" name='price' value={state.price} onChange={handleChange} required/>
                  </div>
                </div>

                <div className="row row-cols-1 row-cols-md-2 mb-3">
                  <div className="col">
                    {/* color  */}
                    <label htmlFor="hire_date" className="form-label">Color <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="color" name='color' value={state.color} onChange={handleChange} required />
                  </div>
                  <div className="col mt-3 mt-md-0">
                    {/* size */}
                    <label htmlFor="city" className="form-label">Size<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="size" name='size' value={state.size} onChange={handleChange} required />
                  </div>
                </div>


                <div className="row row-cols-1 row-cols-md-2 mb-3">
                  <div className="col">
                    {/* images */}
                    <label htmlFor="phone_no" className="form-label">Images <span className="text-danger">*</span></label>
                    <input type="file" className="form-control" id="image1" name='image1' value={state.image1} onChange={handleChange} required />
                  </div>
                  <div className="col mt-3 mt-md-0">
                    {/* stock */}
                    <label htmlFor="nic_no" className="form-label">Stock <span className="text-danger">*</span></label>
                    <input type="number" className="form-control" id="stock" name='stock' value={state.stock} onChange={handleChange} required />
                  </div>
                </div>

              
            
                <div className="row mt-4">
                  <div className="col-8 col-md-3 offset-2 offset-md-9">
                    <button className='btn btn-info text-white w-100' disabled={isLoading}>
                   {isLoading
                       ? <div>
                          <div className="spinner-grow spinner-grow-sm text-light" role="status"></div>
                          <div className="spinner-grow spinner-grow-sm text-light mx-2" role="status"></div>
                          <div className="spinner-grow spinner-grow-sm text-light" role="status"></div>
                        </div>
                     : "Submit" }
               

                    </button>
                  </div>
                </div>
              </form>
            </div>


          </div>
        </div>
      </div>


</>
  )
}
