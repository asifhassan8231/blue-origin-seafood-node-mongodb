import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        fetch('https://frozen-peak-58122.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setIsLoading(false);
            })
    }, [])

    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
    return (
        <div id="products" style={{ backgroundColor: '#88FFF7' }}>
            <div>
                <Container>
                    <h2 className="mb-4">Total Products: {products.length}</h2>
                    <Row xs={1} md={2} className="g-4">
                        {
                            products.map(prd => (
                                <Product key={prd._id} product={prd}></Product>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Products;