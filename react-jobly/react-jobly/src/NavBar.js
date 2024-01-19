import React from 'react';

import {
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';


const Navbars = ({token, username}) => {
 console.log(token);

 const reset = () => {
    window.localStorage.setItem("token", "")
  }
if(!token){
 return (
<Nav
  card
  fill
  pills
>
  <NavItem className='active'>
    <NavLink
      href="/"
      exact path="/"
    >
     Jobly
    </NavLink>
  </NavItem>

  <NavItem className='active' exact path="/login">
    <NavLink
      href="/login"
    >
     Login
    </NavLink>
  </NavItem>

  <NavItem className='active' exact path="/signup">
    <NavLink
      href="/signup"
    >
   Sign-Up
    </NavLink>
  </NavItem>
</Nav>

 )
} else {
    return ( 
        <>
            <Nav
            card
            fill
            pills
          >
            <NavItem className='active'>
              <NavLink
                href="/"
                exact path="/"
              >
               Jobly
              </NavLink>
            </NavItem>
            <NavItem className='active'>
              <NavLink href="/companies" exact path="/companies">
               Companies
              </NavLink>
            </NavItem>
            <NavItem className='active' exact path="/jobs">
              <NavLink
                href="/jobs"
              >
               Jobs
              </NavLink>
            </NavItem>
            <NavItem className='active'>
              <NavLink
                href="/profile"
                exact path="/profile"
              >
               Profile
              </NavLink>
            </NavItem>
          
            <NavItem className='active' exact path="/signup">
              <NavLink
                href="/signup" onClick={reset}
              >
            Log Out {username}
              </NavLink>
            </NavItem>
          </Nav>
          {/* <h1>Welcome {firstName}!</h1>
        <p>to the jobly website</p> */}
        </>
          
           )
       
}
}

export default Navbars