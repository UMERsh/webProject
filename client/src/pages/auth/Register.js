import React,{useState} from 'react'
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
import { Link } from 'react-router-dom'

  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmpassword: ""
  }

export default function Register() {
    const [state,setState] = useState(initialState)

    const handleChange = (e)=>{
         setState(s=>({...s,[e.target.name]: e.target.value}))

    }

    const handleSubmit = (e)=>{
   e.preventDefault();
    let {name,email,password,confirmpassword} = state
    name = name.trim()
    email = email.trim()
    password = password.trim()
    confirmpassword= confirmpassword.trim();

    if (name.length<5) { return alert("Please enter name") }
    if (email.length<5) { return alert("Please enter email") }
    if (password.length<5) { return alert("Please enter password") }
    if (confirmpassword.length<5) { return alert("Please enter confirmpassword") }
   axios.post('http://localhost:8000/api/createUser',state)
   .then((res)=>{
     console.log("res",res);
     alert("User Registered Successfully")
   })
   .catch((err)=>{
    console.log("err",err);
   })
   console.log(state);
    }
  return (
<>
<form onSubmit={handleSubmit}>

<MDBContainer fluid className="p-3 my-5 h-custom">

<MDBRow>

  <MDBCol col='10' md='6'>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
  </MDBCol>

  <MDBCol col='4' md='6'>

    <div className="d-flex flex-row align-items-center justify-content-center">

      <p className="lead fw-normal mb-0 me-3">SignUp</p>

      {/* <MDBBtn floating size='md' tag='a' className='me-2'>
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn>

      <MDBBtn floating size='md' tag='a' className='me-2'>
        <MDBIcon fab icon='twitter' />
      </MDBBtn>

      <MDBBtn floating size='md' tag='a' className='me-2'>
        <MDBIcon fab icon='linkedin-in' />
      </MDBBtn> */}

    </div>

    <div className="divider d-flex align-items-center my-4">
      <p className="text-center fw-bold mx-3 mb-0"></p>
    </div>

    <MDBInput wrapperClass='mb-4' label='Name' name='name' id='formControlLg' type='text' size="lg"  onChange={handleChange}/>
    <MDBInput wrapperClass='mb-4' label='Email address' name='email' id='formControlLg' type='email' size="lg"  onChange={handleChange}/>
    <MDBInput wrapperClass='mb-4' label='Password' name='password' id='formControlLg' type='password' size="lg"  onChange={handleChange}/>
    <MDBInput wrapperClass='mb-4' label='Confirm Password' name='confirmpassword' id='formControlLg' type='password' size="lg" onChange={handleChange} />

   

    <div className='text-center text-md-start mt-4 pt-2'>
      <MDBBtn className="mb-0 px-5" size='lg' type='submit' onSubmit={handleSubmit}>Register</MDBBtn>
    </div>
     <Link to="/login" className='mt-4'>Back to Login</Link>

  </MDBCol>

</MDBRow>



   

</MDBContainer>

</form>
    

</>
  )
}
