import React from 'react';
import './ServiceInfo.css'
import { Button, Card } from 'react-bootstrap';

const ServiceInfo = ({ pd }) => {
    const { name, page, img, author, type, description } = pd;
    return (
        <div className="col-md-4 all">
            <Card className="cards" style={{ width: '22rem' }}>
                <Card.Img variant="top" className="card-img" src={img} />
                <Card.Body>
                    <Card.Title><h2>Name: {name}</h2></Card.Title>
                    <Card.Text>
                        <h5>Author: {author}</h5>
                        <h5>Type: {type}</h5>
                        <h5>Page: {page}</h5>
                        <small>Description: {description}</small>
                    </Card.Text>
                    <Button variant="primary">Read book</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceInfo;