import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faTimes } from '@fortawesome/free-solid-svg-icons';
import PackageModal from '../packagemodal/PackageModal'

export default function PackageCard(props) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body className="text-center">
                    <Card.Title><h3>{props.title}</h3></Card.Title>
                    <Card.Text>
                        <p className=''><FontAwesomeIcon icon={faTimes} />Start Planting: {props.startPlanting}</p>
                        <p className=''><FontAwesomeIcon icon={faClock} />Ready By: {props.readyBy}</p>
                    </Card.Text>
                    <Button variant="primary">View Package</Button>
                </Card.Body>
            </Card>
        </>
    );
}