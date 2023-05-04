import React from 'react'
import {BrowserRouter, Routes , Route,Link} from 'react-router-dom'
import SignUP from '../SignUp/SignUP'
import Login from '../Login/Login'
import Header from '../Header/Header'
import Home from '../Home/Home'
import { useSelector, useDispatch } from 'react-redux'


const ApplicationRouter = () => {
  const dispatch=useDispatch();


  const handleSignupClick=()=>{
    dispatch({type:"CLICK"});
  }
  return (
   <BrowserRouter>
    <Header handleOnClick={handleSignupClick}/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    {/* <Route  path='/signup' element={<SignUP/>}></Route> */}
    <Route path='/login' element={<Login/>}></Route>
   </Routes>
   </BrowserRouter>
 
  
   
  )
}

export default ApplicationRouter
