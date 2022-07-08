import React, { useState, useEffect } from 'react'
import '../css/display.css'
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Bars } from 'react-loader-spinner';
export default function Display() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=1')
      .then((res) => {
        setUsers(res.data);
      })
  }, [])

  if (users) {
    return (
      <>
        <div className="displayyy">
          {users.data.map(({ id, first_name, last_name, email, avatar }) => (
            <div className="card setr" style={{ width: ' 18rem' }} key={id}>
              <img src={avatar} className="card-img-top" alt="..." />
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
  return (
    <><div className="loader">
      <Bars color="#377D71" height={80} width={80} />
    </div>
    </>
  )

}
