import React from "react";
import { Button, Card, CardBody, CardText, CardTitle, NavLink } from "reactstrap";

const JobCard = ({title, salary, equity}) => {
  const click = () => {
    
  }
return (
    <Card className="my-2">
    <CardBody>
      <CardTitle tag="h5">
        {title}
      </CardTitle>
      <CardText>
    <ul>
    <li>Salary: {salary} </li> 
    <li>Equity: {equity}</li>
    </ul>
    <Button>
      <NavLink hreff="">Apply</NavLink>
    </Button>
      </CardText>
    </CardBody>
  </Card>   
)
}



export default JobCard