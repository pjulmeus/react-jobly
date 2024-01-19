import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {Form, Label, Input, FormGroup,  Button
  } from 'reactstrap';
import "./Form.css" 
import 'bootstrap/dist/css/bootstrap.css';
import JoblyApi from "./api";


const SignUpForm = () => {

    const INITIAL_STATE = {
        username : "",
        password : "",
        firstName : "",
        lastName : "",
        email: ""
    }

    const [fData, setFormData] = useState(INITIAL_STATE)
    let history = useHistory()
    console.log(history);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
      }

    const handleSubmit = evt => {
        evt.preventDefault();
        JoblyApi.registerUsers({...fData}).then(res => {window.localStorage.setItem("token" , res.token)})
        window.localStorage.setItem("user", JSON.stringify(fData))
        alert(` user ${fData.username}, password ${fData.password}, first name ${fData.firstName}, 
        last name ${fData.lastName}, email ${fData.email}`)  
        history.push('/')
        //setToken(JoblyApi.token)
        
              
      };

return ( 
<>
<h1 className="formHeader">Sign Up</h1>
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
      type="passwords"
      value={fData.password}
      onChange={handleChange}
    />
    </FormGroup>
<FormGroup>
    <Label htmlFor="firstName">
    First Name
    </Label>
    <Input
      id="firstName"
      name="firstName"
      placeholder="Place Your First Name Here"
      type="firstName"
      value={fData.firstName}
      onChange={handleChange}
    />
</FormGroup>
<FormGroup>
    <Label htmlFor="lastName">
    Last Name
    </Label>
    <Input
      id="lastName"
      name="lastName"
      placeholder="Place Your Last Name Here"
      type="lastName"
      value={fData.lastName}
      onChange={handleChange}
    />
</FormGroup>
    <FormGroup>
    <Label htmlFor="email">
      Email
    </Label>
    <Input
      id="email"
      name="email"
      placeholder="Place Your Email Here"
      type="email"
      value={fData.email}
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




export default SignUpForm




