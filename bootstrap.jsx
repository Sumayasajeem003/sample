import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Apps(){
    return(
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?cs=srgb&dl=beef-bread-buns-1633578.jpg&fm=jpg" />
      <Card.Body>
        <Card.Title>Burger</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">order now</Button>
      </Card.Body>
    </Card>
      
    );
}
export default Apps;