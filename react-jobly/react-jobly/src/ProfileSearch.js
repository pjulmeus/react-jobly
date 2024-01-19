import React, { useState } from "react";
import { Button, Label, Input } from "reactstrap";
import JoblyApi from "./api";
import CompaniesCard from "./companiesCard";

const ProfileSearch = () => {
    const [cData, setData] = useState([])
    const [names, setName] = useState("")

    const handleChange = ((e) => {
         setName(e.target.value)
    })

    const handleSubmit = ((e) => {
        e.preventDefault()     
        console.log(names);
        const res = JoblyApi.getCompanySearch(names).then(res=> console.log(res.companies)) 
        console.log(res);
        setData(res)
        setName("") 
        console.log(cData);
   })

return(

<form onSubmit={handleSubmit} >
    <Input
        name="search"
        type="text"
        placeholder="Place Your Search Query"
        value={names}
        onChange={handleChange}
    />
    <Button color="primary"> search </Button>   
 {cData ? cData.map(comp => 
    <CompaniesCard key={comp.handle} name={comp.name} description= {comp.description} logoUrl={comp.logoUrl} />): "is..Loading"   } 
     
</form>


    )
}

export default ProfileSearch