import React, { useState, useEffect} from "react";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import NotFoundorNoAccess from "./404";
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


const ComnpanyDetail = ({token}) => {
    const {company} = useParams()
    console.log(company.toString());
    const [cData, setData] = useState([])
useEffect(()=>{
    async function getComp(search){
       const res = await JoblyApi.getCompany(search)
        setData(res)
    }
         getComp(company)
    },[])
    if(token){
          return (
        <>
        <h1>{cData ? cData.name : "loading......"}</h1>
    {cData.jobs ? cData.jobs.map( job => 
    <JobCard key={job.id} title ={job.title} salary = {job.salary} equity = {job.equity}/>) : "Loading..."} 
     </>
     ) 
   
    } else {
        return (
    <NotFoundorNoAccess />
        )
    }
    }
 


export default ComnpanyDetail