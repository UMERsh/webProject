import React,{useState,useEffect} from 'react'
import axios from 'axios';


export default function Index() {
    const [isLoading,setIsLoading] = useState(true);
    const [document,setDocument] = useState([]);
    const [filteredDocuments,setFilteredDocuments] = useState([]);

  
  useEffect(()=>{
    axios.get("http://localhost:8000/read")
    .then((res)=>{
      const {data} = res
      setDocument(data)
      setFilteredDocuments(data)
      console.log("array",data);
    })
    .catch((err=>{
      console.log("err",err);
    })) 
     .finally(()=>{
      
      setIsLoading(true)
   })
   }
  ,[])

  const handleSearch =e=>{
    let text = e.target.value
     setFilteredDocuments(document.filter(doc=>doc.title.toLowerCase().includes(text.toLowerCase())))
  }

  useEffect(()=>{
    let text = "updated title"
 console.log("filteredDocuments", filteredDocuments);
  },[document])

const handleEdit = data=>{
  console.log("data for edit",data);
  axios.post("http://localhost:8000/update", data)
  .then((res)=>{
     console.log("res",res);
  })
  .catch((err)=>{
     console.log("err",err);
  })
}

const handleDelete = data =>{
  console.log("data for Delete" , data);
  axios.post("http://localhost:8000/delete", data)
  .then((res)=>{
     console.log("res",res);
     if(res.data === "Data Deleted"){
      let DocumentsAfterDelete = document.filter(doc=>doc._id !== data._id)
      setDocument(DocumentsAfterDelete)
     }
  })
  .catch((err)=>{
     console.log("err",err);
  })
}
  return (
    <>
        <div className="py-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 offset-md-3">
                        <h2 className="text-center">APPS</h2>
                        <input type="search" className='form-control mb-3' placeholder='Search...' onChange={handleSearch} />
                    </div>
                </div>
              <div className="row">
                <div className="col">
               <table className="table">
                            <thead>
                              <tr>
                           <th scope="col">#</th>
                          <th scope="col">Title</th>
                            <th scope="col">Location</th>
                            <th scope="col">Description</th>
                              <th scope="col">Action</th>
                                    </tr>
                                      </thead>
                                      <tbody>
                             {filteredDocuments.map((data,i)=>{
                                 return (

    
                              <tr key={i}>
                               <th scope="row">{i + 1}</th>
                            <td>{data.title}</td>
                             <td>{data.location}</td>
                                  <td>{data.description}</td>
                                 <td>
                                  <button className='btn btn-info btn-sm me-2' onClick={()=>{handleEdit(data)}}>Edit</button>
                       <button className='btn btn-danger btn-sm' onClick={()=>{handleDelete(data)}}>Delete</button>
      
                               </td>
                                </tr>)
                                   })}
   
                                       </tbody>
                                </table>
                       
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
