import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Book.css'

const Book = (props) => {
    <h1 className="text-center m-5 p-5">Pick Your Favourite one!!</h1>
    // console.log(props);
    const { name, page, img, author, type } = props.book;
    return (

        <div className="col-md-4 all">
            <Card className="card" style={{ width: '22rem' }}>
                <Card.Img variant="top" className="card-img" src={img} />
                <Card.Body>
                    <Card.Title><h2>Name: {name}</h2></Card.Title>
                    <Card.Text>
                        <h5>Author: {author}</h5>
                        <h5>Type: {type}</h5>
                        <h5>Page: {page}</h5>
                    </Card.Text>
                    <Button variant="primary">Read book</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Book;