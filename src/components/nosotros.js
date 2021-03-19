import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card'

function Nosotros() {
return(
  <div>
    <Breadcrumb>
      <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
      <Breadcrumb.Item href="">Catalogo </Breadcrumb.Item>
    </Breadcrumb>
    <h1>En este apartado tendra toda la informacion de la tienda</h1>
    <Card className="text-center">
      <Card.Header>Informacion de la sucursal</Card.Header>
      <Card.Body>
        <Card.Title>Redes sociales</Card.Title>
        <Card.Text>
        ShoerTour.com
        </Card.Text>

        <Card.Title>Telefono</Card.Title>
        <Card.Text>254200000    </Card.Text>

        <Card.Title>Correo electronico</Card.Title>
        <Card.Text>
        ShoerTour@gmail.com
        </Card.Text>
      </Card.Body>
    </Card>
   </div>
 );}
export default Nosotros;