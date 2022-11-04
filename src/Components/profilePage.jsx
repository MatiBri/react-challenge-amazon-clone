//El perfil hacer un boton que capture el nombre con el que la persona se logeo
import { Container } from "@material-ui/core";
import React from "react";

//Card bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//Form bootstrap
import Form from 'react-bootstrap/Form';

function Profile() {
    return (
        <div className="cardCentered">
            <Card className="text-center" style={{ width: '30rem', position: 'right', margin: 'right' }}>
                <Card.Header>
                    <b>Gordon Freeman</b>
                    <Card.Img className="" variant="top" src="https://www.dsogaming.com/wp-content/uploads/2020/03/little-red-zombies-000a-littleredzombies-gordon.jpg" />
                </Card.Header>
                <Card.Body>
                    <Card.Title>Doctor en física teórica. Científico, graduado del MIT.</Card.Title>
                    <hr />
                    <Card.Text>
                        Seattle, Washington, Estados Unidos
                    </Card.Text>
                    <Card.Text>
                        Hombre. Edad: 27
                    </Card.Text>
                    <Container>
                        <Button variant="dark">Conectar</Button>
                        <Button variant="info">Enviar mensaje</Button>
                    </Container>
                </Card.Body>
                <Card.Footer className="text-muted">Nivel de usuario: 7</Card.Footer>
            </Card>
            {/* INFORMACIÓN DEL PROFILE PAGE */}
            <Container className="form-control border border-primary">
                <Form>
                    <Form.Text>
                        <h2><b>Información general</b></h2>
                    </Form.Text>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            No compartas estos datos con nadie.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Cumpleaños</Form.Label>
                        <Form.Control type="date" placeholder="Date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="number" placeholder="Teléfono" />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Guardar
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Profile;