import React from 'react'
import NavBar from './NavBar/NavBar'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import Add_Restaurant from './addRestaurant/addRestaurant'

function App() {
  return (
    <>
      <NavBar/>
      
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/addrestaurant' element={<Add_Restaurant/>}></Route>
      </Routes>

      {/* <Home/> */}
    </>
  )
}

export default App