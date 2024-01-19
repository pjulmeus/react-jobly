
import './App.css';
import Navbars from './NavBar';
import SignUpForm from './SignUpForm';
import CompaniesList from './CompaniesList';
import {  Route, Switch } from "react-router-dom";
import Home from './Home';
import LoginForm from './LoginForm';
import ComnpanyDetail from './CompanyDetail';
import Jobs from './Jobs';
import JoblyApi from './api';
import { useEffect , useState} from 'react';
import { decodeToken } from "react-jwt"
import Profile from './Profile';
// import jwt from "jsonwebtoken";


function App() {
  let token = (window.localStorage.getItem("token")); 
  let newUser = JSON.parse(localStorage.getItem('user'))
  const [currentUser, setCurrentUser] = useState(null);

useEffect(()=> {

async function getCurrentUser() {  
if(token && !newUser){
  try {
    JoblyApi.token = token
    let {username} = decodeToken(token)
    let usersItem= await JoblyApi.getUsers(username)
    window.localStorage.setItem("user", JSON.stringify(usersItem));
    setCurrentUser(usersItem)
  } catch (error) {
    console.log(error);
    setCurrentUser(null)
  }
}
}
getCurrentUser()
},[token])

console.log("new" , currentUser);

// const decoded = jwtDecode(token);

// console.log(decoded)
// JoblyApi.getUsers("lovedawgsd").then(res => {console.log(res)})
return(
<div className="App">
<Navbars token={token} username={newUser ? newUser.username: currentUser.username}/>
<div className='body'>
<Switch>
  <Route exact path="/">
     <Home token = {token}  name = {newUser ? newUser.firstName : currentUser.firstName}/>
  </Route>
  <Route exact path= "/signup">
    <SignUpForm/>
  </Route>
  <Route exact path= "/login">
    <LoginForm/>
  </Route>
  <Route exact path= "/companies">
   <CompaniesList token = {token}/>
  </Route>
  <Route path= "/companies/:company">
    <ComnpanyDetail token = {token}/>
  </Route>
  <Route exact path= "/jobs">
    <Jobs token={token}/>
  </Route>
  <Route exact path= "/profile">
    <Profile token = {token}/>
  </Route>
</Switch>
 
</div>
    </div>
  );
}

export default App;
