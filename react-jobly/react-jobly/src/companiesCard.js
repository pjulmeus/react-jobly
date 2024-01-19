import React from "react";
import {Card,CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
const CompaniesCard = ({name, description, logoUrl}) => {
   
   return ( 
   <>
   <Card className="my-2">
    <CardImg
      alt="Card image cap"
      src={logoUrl}
      style={{
        height: 180
      }}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        {name}
      </CardTitle>
      <CardText>
        {description}
      </CardText>
    </CardBody>
  </Card>
  </>
)

}

export default CompaniesCard