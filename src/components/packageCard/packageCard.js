import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function PackageCard(props) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body className="text-center">
                    <Card.Title><h3>{props.title}</h3></Card.Title>
                    <Card.Text>
                        <i className="far fa-clock"></i><p>Start Planting: {props.startPlanting}</p>
                        <i className="far fa-clock"></i><p>Ready By: {props.readyBy}</p>
                    </Card.Text>
                    <Button variant="primary">View Package</Button>
                </Card.Body>
            </Card>
        </>
    );
}