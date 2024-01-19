import React, { useState } from "react";
import {Form, Label, Input, FormGroup, Button, UncontrolledCollapse} from 'reactstrap';
import "./Form.css" 

import 'bootstrap/dist/css/bootstrap.css';
import JoblyApi from "./api";
import LoggedIn from "./LoggedOut";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const LoginForm = () => {

    const INITIAL_STATE = {
        username : "",
        password : "",
    }

    const [fData, setFormData] = useState(INITIAL_STATE)
    const history = useHistory()

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
      }

    const handleSubmit = evt => {
        evt.preventDefault();
        console.log({...fData});
           JoblyApi.authenticateUsers({...fData}).then(res => {window.localStorage.setItem("token" , res.token)})
           const token = window.localStorage.getItem("token")
           console.log(token);
          // //  authenticateJWT(token)
          //  home()
      //     const user = JoblyApi.getUsers(fData.username)
      //  console.log(user);
        alert(` user ${fData.username}, password ${fData.password}`)
      };


      const home = () =>{ 
        history.push("/")
      }

return ( 
<>

<h1 className="formHeader">Login</h1>
<Form className="formBody" onSubmit={handleSubmit}>
<FormGroup>
    <Label htmlFor="username">
    Username
    </Label>
    <Input
      id="username"
      name="username"
      placeholder="Place Your Username Here"
      type="text"
      value={fData.username}
      onChange={handleChange}
    />
    </FormGroup>
<FormGroup>
    <Label htmlFor="password">
      Password
    </Label>
    <Input
      id="password"
      name="password"
      placeholder="Place Your Passwords Here"
      type="password"
      value={fData.password}
      onChange={handleChange}
    />
    </FormGroup>
    <Button 
    color="primary"
  >
Submit
  </Button>
</Form>
</>

 )
}


  




export default LoginForm