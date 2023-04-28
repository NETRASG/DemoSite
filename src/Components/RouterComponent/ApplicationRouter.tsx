import React from 'react'
import {BrowserRouter, Routes , Route,Link} from 'react-router-dom'
import SignUP from '../SignUp/SignUP'
import Login from '../Login/Login'
import Header from '../Header/Header'

const ApplicationRouter = () => {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={''}></Route>
    <Route  path='/signup' element={<SignUP/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
   </Routes>
   </BrowserRouter>
 
  
   
  )
}

export default ApplicationRouter
