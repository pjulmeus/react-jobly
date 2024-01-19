import React, {useState, useEffect} from "react";
import NotFoundorNoAccess from "./404";
import JoblyApi from "./api";
import JobCard from "./JobCard";

const Jobs = ({token}) => {
    const [cData, setData] = useState([])
    useEffect(()=>{
        JoblyApi.request('jobs').then(option=> setData(option.jobs)) 
        },[])

if (token) {
return(
    <>
    {cData ? cData.map( job => 
            <JobCard key={job.id} title ={job.title} salary = {job.salary} equity = {job.equity}/>) : "Loading..."} 
    </>
)
} else {
    return (
<NotFoundorNoAccess />
    )
}


        
}

export default Jobs