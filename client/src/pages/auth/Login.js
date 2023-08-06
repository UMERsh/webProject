import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon,
    MDBRow,
    MDBCol,
  } from 'mdb-react-ui-kit'
import axios from 'axios'

  const initialState = {
    email: "",
    password: ""
  }
export default function Login() {
    const [state,setState] = useState(initialState)

    const handleChange = (e)=>{
         setState(s=>({...s,[e.target.name]: e.target.value}))

    }

    const handleSubmit = (e)=>{
   e.preventDefault();
   const{email,password} = state
   console.log(state);
// console.log(email);
// console.log(password);
 axios.post('http://localhost:8000/api/createUser',state)
 .then((res)=>{
    console.log("res",res);
    alert("User LoggedIn")
 })
 .catch((err)=>{
    console.log("err",err);
 })
    }
  return (
    <>
<form onSubmit={handleSubmit} >

         <MDBContainer fluid className="p-3 my-5 h-custom">

<MDBRow>

  <MDBCol col='10' md='6'>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
  </MDBCol>

  <MDBCol col='4' md='6'>

    <div className="d-flex flex-row align-items-center justify-content-center">

      <p className="lead fw-normal mb-0 me-3">Sign in with</p>

      
    </div>

    <div className="divider d-flex align-items-center my-4">
    </div>

    <MDBInput wrapperClass='mb-4' label='Email address' name='email' id='formControlLg' type='email' size="lg"  onChange={handleChange}/>
    <MDBInput wrapperClass='mb-4' label='Password' name='password' id='formControlLg' type='password' size="lg" onChange={handleChange} />


    <div className='text-center text-md-start mt-4 pt-2'>
     <Link to="/"> <MDBBtn className="mb-0 px-5" size='lg' type='submit' onSubmit={handleSubmit}>Login</MDBBtn></Link>
      <Link to="/register"><p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p></Link>
    </div>

  </MDBCol>

</MDBRow>



   

</MDBContainer>

    
</form>
    </>
  )
}
