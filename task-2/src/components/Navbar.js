import React from 'react'
import '../css/navbar.css'
export default function Navbar(props) {



  return (
    <>
    <div className="nav">
    <div className="heading">LGMVIP </div>
    <button type='button' className='sett' onClick={props.loadUsers}>Get Users</button>
    </div>
    
    </>
  )
}
