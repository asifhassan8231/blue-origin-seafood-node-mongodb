import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const uri = `https://frozen-peak-58122.herokuapp.com/products/${id}`;
    useEffect(() => {
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, [uri])

    const onSubmit = data => {
        axios.post(`http://localhost:5000/products/${id}`, data)
            .then(res => {
                if (res) {
                    alert('Placed Order Successfully!');
                    reset();
                }
            })
    };

    return (
        <div className="container p-3">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div>
                        <img src={product.img} className="img-fluid" alt="" />
                        <h3>{product.title}</h3>
                        <h4>{product.description}</h4>
                        <h4>$ {product.price}</h4>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <h3>Place Order:</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.displayName} {...register("name")} />
                        <br />
                        <input defaultValue={user.email}{...register("email", { required: true })} />
                        <br />
                        <input defaultValue={product._id}{...register("id", { required: true })} />
                        <br />
                        <input defaultValue={product.title}{...register("title", { required: true })} />
                        <br />
                        <input type="number" placeholder="Quantity" {...register("quantity", { required: true, min: 1 })} />
                        {errors.Quantity && <span>This field is required</span>}
                        <br />
                        <input placeholder="Address" {...register("address", { required: true })} />
                        {errors.address && <span>This field is required</span>}
                        <br />
                        <input placeholder="Phone Number" {...register("number", { required: true })} />
                        {errors.number && <span>This field is required</span>}
                        <hr />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;