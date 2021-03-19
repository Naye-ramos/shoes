import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Catalogo() {

return(
    <div>
    <Breadcrumb>
      <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
      <Breadcrumb.Item href="">Catalogo </Breadcrumb.Item>

    </Breadcrumb>

    <h1>En este apartado tendra todos los productos de la tienda</h1>

      <CardDeck>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Marca</Card.Title>
          <Card.Text>
            Descripcion del producto
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Precio</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="../image/n.jpg" />
        <Card.Body>
        <Card.Title>Marca</Card.Title>
          <Card.Text>
            Descripcion del producto
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Precio</small>
        </Card.Footer>
      </Card>
    <Card>
        <Card.Img variant="top" src="../image/si.jpeg" />
        <Card.Body>
        <Card.Title>Marca</Card.Title>
          <Card.Text>
            Descripcion del producto
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Precio</small>
        </Card.Footer>
      </Card>
    </CardDeck>

    </div>
  );
}
export default Catalogo;