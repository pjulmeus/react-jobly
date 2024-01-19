import React, { useState, useEffect } from "react";
import NotFoundorNoAccess from "./404";
import JoblyApi from "./api";
import CompaniesCard from "./companiesCard";
import { Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import ProfileSearch from "./ProfileSearch";


const CompaniesList = ({token}) => {
    const [cData, setData] = useState([])

useEffect(()=>{
    JoblyApi.request('companies').then(option=> setData(option.companies)) 
    },[])
if(token){
return (
    <>
<ProfileSearch/>
{cData.map(comp => 
  <CompaniesCard key={comp.handle} name={comp.name} description= {comp.description} logoUrl={comp.logoUrl} />
)}
    </>
 )
} else {
    return (
<NotFoundorNoAccess />
    )
}
}
 

export default CompaniesList

