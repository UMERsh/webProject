import React,{useState,useEffect} from 'react'
import axios from 'axios';

const initialState = {
    title: "",
    location: "",
    description: ""
}
export default function Add() {
    const [state,setState] = useState(initialState);

    const handleChange =e=>{
        const{name,value} = e.target
        setState(s=>({...s,[name]:value}))
    }
  useEffect(()=>{
  axios.get("http://localhost:8000/read")
   .then((res)=>{
    const {data} = res
    console.log("array",data);
   })
   .catch((err=>{
     console.log("err",err);
   }))
   }
  ,[])


    const handleSubmit =e=>{
     e.preventDefault()

  let {title,location,description} = state
   title = title.trim()
   location = location.trim()
   description = description.trim()

  if (title.length<3) {return alert("please enter title")}
  if (location.length<3) {return alert("please enter location")}
  if (description.length<3) {return alert("please enter description")}
    
  let data = {title,location,description,
//    status: "active",
//    dateCreated: new Date().getTime()
}


     axios.post("http://localhost:8000/", data)
     .then((res)=>{
        console.log("res",res);
        alert("Data Added")
     })
     .catch((err)=>{
        console.log("err",err);
     })
    }
  return (
    <>
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="text-center">ADD DATA</h2>
                    </div>
                </div>
                 <form onSubmit={handleSubmit}>

                <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                        <input type="text" placeholder='Title' name='title' className='form-control' onChange={handleChange} />
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <input type="text" placeholder='location' name='location' className='form-control' onChange={handleChange} />
                    </div>
                <div className="col-12 mb-3">
                <textarea name="description" placeholder='Description' className='form-control' id="description" onChange={handleChange}></textarea>
                    </div>
                    <div className="col-12 col-md-6 offset-md-3">
                    <button className='btn btn-outline-success  w-100'>ADD DATA</button>
                    </div>

                </div>
                 </form>
            </div>
        </div>
    </>
  )
}
