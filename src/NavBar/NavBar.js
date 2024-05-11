import React from 'react'
import { NavLink } from 'react-router-dom'
import './Css_Nav.css'

function NavBar() {
  return (
    <>
        <div class="nav-bar">
            <div class="nav-left">
                <NavLink to={'/addrestaurant'} style={{textDecoration:'none'}}>
                <span>Add Restaurant</span>
                </NavLink>

                <span>View Food</span>
            </div>

            <div class="nav-right">
              <NavLink to={'/signup'} style={{textDecoration:'none'}}>
                <span id="signUp">SignUp</span>
              </NavLink>
                
              <NavLink to={'/login'} style={{textDecoration:'none'}}>
                  <span id="login" >Login</span>
              </NavLink>
                
            </div>
        </div>
    </>
  )
}

export default NavBar