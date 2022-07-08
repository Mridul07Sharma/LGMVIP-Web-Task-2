import Navbar from "./components/Navbar";
import Display from "./components/Display";
import React, {useEffect, useState,CSSProperties } from "react";
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


// const override: CSSProperties = {
//   textAlign:'center',
// backgroundColor:'#081b24',
// display: 'flex',
// justifyContent:'center',
// alignItems:'center',
// width:'100%',
// height:'100vh',
// margin: '0 auto',
// borderColor: 'red'
// };





function App() {
  const [users,setUsers]=useState([]);
  // const [loading, setLoading] = useState(true);
  const loadUsers=async ()=>{
    const response=await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse=await response.json();
    setUsers(jsonResponse.data);
    }


// useEffect(()=>{
// const setUsers2=async ()=>{
// const res=loadUsers();
// setUsers(res.data);
// setLoading(false) ;
// }
// loadUsers()
//     }, [])




  return (
   <>
   <Navbar loadUsers={loadUsers} />

   {/* {
        loading ?
        <ClimbingBoxLoader
        color={'#eceef1'} loading={loading} css={override} size={150} />
        : */}
        <Display users={users}/>
        
    {/* }   */}

   
   </>
  );
}

export default App;
