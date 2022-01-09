//import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Upcoming.module.css';


export default function PackageCard(props) {
    if(props.label == 'Event') {
        return (
            <>
                <Card className={styles.cardBody} style={{ width: '18rem' }}>
                    <Card.Img  className={styles.cardImg} variant="top" src={props.image} />
                    <h3 className={styles.label}>{props.label}</h3>
                    <Card.Body>
                        <Card.Title className="eventName text-center"><h3>{props.title}</h3></Card.Title>
                        <Card.Text>
                            <p className={styles.cardDetails}><FontAwesomeIcon icon={faTimes} />Start Planting: <span className='detailDate'>{props.startPlanting}</span></p>
                            <p className={styles.cardDetails}><FontAwesomeIcon icon={faClock} />Ready By: <span className='detailDate'>{props.readyBy}</span></p>
                        </Card.Text>
                        <div className='d-flex justify-content-center'>
                            <Button className={styles.cardButton} variant="primary">View Package</Button>
                        </div>
                    </Card.Body>
                </Card>
            </>
        );
    }
    return (
            <>
                <Card className={styles.cardBody} style={{ width: '18rem' }}>
                    <Card.Img  className={styles.cardImg} variant="top" src={props.image} />
                    <h3 className={styles.labelWorkshop}>{props.label}</h3>
                    <Card.Body>
                        <Card.Title className="text-center"><h3>{props.title}</h3></Card.Title>
                        <Card.Text>
                            <p className={styles.cardDetails}><FontAwesomeIcon icon={faTimes} />Start Planting: <span className='detailDate'>{props.startPlanting}</span></p>
                            <p className={styles.cardDetails}><FontAwesomeIcon icon={faClock} />Ready By: <span className='detailDate'>{props.readyBy}</span></p>    
                        </Card.Text>
                        <div className='d-flex justify-content-center'>
                            <Button className={styles.cardButton} variant="primary">View Package</Button>
                        </div>
                    </Card.Body>
                </Card>
            </>
        );
}
// <FontAwesomeIcon icon={faTimes} />
// <FontAwesomeIcon icon={faClock} />