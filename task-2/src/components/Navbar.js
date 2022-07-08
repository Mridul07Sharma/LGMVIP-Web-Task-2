import React, { useState } from 'react'
import '../css/navbar.css'
import Display from "./Display";

export default function Navbar() {
  const [mode, setMode] = useState(false);
  return (
    <>
      <div className="nav">
        <div className="heading">LGMVIP </div>
        <button type='button' className='sett' onClick={() => setMode(true)} >Get Users</button>
      </div>
      <main>
        {mode ? <Display /> : <div className="demp">
          <p> Click on 'Get Users' Button to get the data from API.</p></div>}
      </main>
    </>

  )
}

