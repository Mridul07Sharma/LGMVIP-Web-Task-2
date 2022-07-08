import React from 'react'
import '../css/display.css'
export default function Display(props) {
  return (
    <>
 <div className="displayyy">      
{props.users.map(({id,first_name,last_name,email,avatar})=>(
<div className="card setr" style={{width:' 18rem'}} key={id}>
  <img src={avatar} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center lettt">{first_name} {last_name}</h5>
    <p className="card-text text-center met"><b>E-mail:</b> {email}</p>
  
  </div>
</div>

))}
</div>  
    </>
  )
}
