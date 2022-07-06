import React,{ useState } from 'react'
import '../css/navbar.css'
export default function Navbar() {

const [users,setUsers]=useState([]);
const loadUsers=async ()=>{
const response=await fetch("https://reqres.in/api/users?page=1");
const jsonResponse=await response.json();
setUsers(jsonResponse.data);
}

  return (
    <>
    <button onClick={loadUsers}>Get Data</button>
    <h2>Users:</h2>
    <ul>
{users.map(({id,first_name,last_name})=>(
  <li key={id}>Name: {first_name} {last_name}</li>
))}
    </ul>
    </>
  )
}
