import React, { useState } from "react";
import {Form, Label, Input, FormGroup, Button, UncontrolledCollapse} from 'reactstrap';
import "./Form.css" 

import 'bootstrap/dist/css/bootstrap.css';
import JoblyApi from "./api";
import LoggedIn from "./LoggedOut";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Profile = ({token}) => {
let newUser = JSON.parse(localStorage.getItem('user'))


let INITIAL_STATE = {
    username : newUser.username,
    firstName : newUser.firstName, 
    lastName : newUser.lastName, 
    email : newUser.email,
    isAdmin : newUser.isAdmin
}


const [fData, setFormData] = useState(INITIAL_STATE)
    let history = useHistory()


    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
      }
    
    const deleteUse = () => {
        JoblyApi.token = token
        JoblyApi.deleteUsers(fData.username)
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        setFormData({...fData})
        JoblyApi.token = token
        window.localStorage.setItem("user", JSON.stringify(fData))
        JoblyApi.patchUsers({...fData})
        alert(` user ${fData.username}, password ${fData.password}, first name ${fData.firstName}, 
        last name ${fData.lastName}, email ${fData.email}`)  
        history.push('/')
        //setToken(JoblyApi.token)
        
              
      };

return (
<>
<h1 className="formHeader">Profile Page</h1>
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
<Button
    color="primary"
    onClick={deleteUse}
  >
Delete
  </Button>
</>
)


}

export default Profile