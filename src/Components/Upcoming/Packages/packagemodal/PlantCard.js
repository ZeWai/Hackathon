import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function PlantCard(props) {
    return (
        <>
            <Card style={{ width: '18rem', height: '4rem' }}>
                <Card.Img variant="right" src={props.plants.image} />

            </Card>
    )
}