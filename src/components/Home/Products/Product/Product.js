import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { img, title, description, price, _id } = product;
    const url = `/products/${_id}`;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} className="img-fluid" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <h3>Price: {price}</h3>
                    </Card.Body>
                    <Link to={url}><button className="btn btn-primary">Order Now!</button></Link>
                </Card>
            </Col>
        </div>
    );
};

export default Product;