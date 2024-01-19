import React from "react";
import {Badge} from 'reactstrap';
import "./Home.css"


const Home = ({token, name}) => {
if (!token){
    return (
        <>
        <h1 className="header">Welcome to the Jobly!</h1>
      
  <Badge
    color="primary"
    href="/login"
  >
  Login
  </Badge>
        </>
    )
} else {
return( <>
    <h1>Welcome {name} !</h1>
    <p>to the jobly website</p>
 </>)
}
}

export default Home