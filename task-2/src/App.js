// import Navbar from "./components/Navbar";
import Display from "./components/Display";
import React, {Component } from "react";
import './css/navbar.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        user_data : [],
        loading : true
      }
    this.displayUsers = this.displayUsers.bind(this)
  }

  displayUsers() {
    
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
    .then(response => response.json())
    .then((users) => {
      this.setState({
        user_data : users.data,
        loading : false
      })
    })
    .catch((err) => {
      console.error(err)
    })
  }

  render() {
  return (
   <>
    <div className="nav">
    <div className="heading">LGMVIP </div>
    <button type='button' className='sett' id="fet" onClick={this.displayUsers}>Get Users</button>
    </div>
    
    <Display loading={this.state.loading} users={this.state.user_data}/>
   </>
  );
}
}
export default App;
