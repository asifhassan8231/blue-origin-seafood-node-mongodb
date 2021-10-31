import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res) {
                    alert('Product Added Successfully!');
                    reset();
                }
            })
            .catch(error => {
                console.log(error.message);
            });
    };
    return (
        <div className="container p-4">
            <h2>Add new products</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="title" {...register("title")} />
                    {errors.title && <span>This field is required</span>}
                    <br />
                    <input placeholder="description" {...register("description", { required: true })} />
                    {errors.description && <span>This field is required</span>}
                    <br />
                    <input type="number" placeholder="price" {...register("price", { required: true })} />
                    {errors.price && <span>This field is required</span>}
                    <br />
                    <input placeholder="image url" {...register("img", { required: true })} />
                    {errors.img && <span>This field is required</span>}
                    <hr />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;