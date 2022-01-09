import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function PackageCard(props) {
    if(props.label == 'Event') {
        return (
            <>
                <Card className='cardBody' style={{ width: '18rem' }}>
                    <Card.Img  className='cardImg' variant="top" src={props.image} />
                    <h3 className='label'>{props.label}</h3>
                    <Card.Body>
                        <Card.Title className="text-center"><h3>{props.title}</h3></Card.Title>
                        <Card.Text>
                            <p className='cardDetails'><FontAwesomeIcon icon={faTimes} />Start Planting: <span className='detailDate'>{props.startPlanting}</span></p>
                            <p className='cardDetails'><FontAwesomeIcon icon={faClock} />Ready By: <span className='detailDate'>{props.readyBy}</span></p>
                        </Card.Text>
                        <div className='d-flex justify-content-center'>
                            <Button className='cardButton' variant="primary">View Package</Button>
                        </div>
                    </Card.Body>
                </Card>
            </>
        );
    }
    return (
            <>
                <Card className='cardBody' style={{ width: '18rem' }}>
                    <Card.Img  className='cardImg' variant="top" src={props.image} />
                    <h3 className='labelWorkshop'>{props.label}</h3>
                    <Card.Body>
                        <Card.Title className="text-center"><h3>{props.title}</h3></Card.Title>
                        <Card.Text>
                            <p className='cardDetails'><FontAwesomeIcon icon={faTimes} />Start Planting: <span className='detailDate'>{props.startPlanting}</span></p>
                            <p className='cardDetails'><FontAwesomeIcon icon={faClock} />Ready By: <span className='detailDate'>{props.readyBy}</span></p>    
                        </Card.Text>
                        <div className='d-flex justify-content-center'>
                            <Button className='cardButton' variant="primary">View Package</Button>
                        </div>
                    </Card.Body>
                </Card>
            </>
        );
}
// <FontAwesomeIcon icon={faTimes} />
// <FontAwesomeIcon icon={faClock} />