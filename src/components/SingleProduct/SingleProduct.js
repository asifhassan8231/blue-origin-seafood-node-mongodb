import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const uri = `http://localhost:5000/products/${id}`;
    useEffect(() => {
        fetch(uri)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    console.log(product);
    return (
        <div>
            <h2>hello product:{id}</h2>
            <h3>{product.title}</h3>
        </div>
    );
};

export default SingleProduct;