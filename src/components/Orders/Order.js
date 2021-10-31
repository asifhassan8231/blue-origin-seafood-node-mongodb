import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Order = () => {
    const [order, setOrder] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://frozen-peak-58122.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user.email])
    console.log(order);

    const handleCancel = (id) => {
        const proceed = window.confirm('Are you sure about that?');
        if (proceed) {
            fetch(`https://frozen-peak-58122.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    if (data) {
                        alert('Successfully Deleted!');
                        const remainingOrders = order.filter(ord => ord._id !== id);
                        setOrder(remainingOrders);
                        window.history.go(0);
                    }
                })
        }
    }
    return (
        <div className="container">
            <h2>My orders</h2>
            <div>
                {
                    order.map(ord => (
                        <ul key={ord._id}>
                            <li>Name: {ord.title} Quantity: {ord.quantity} status: {ord?.status}  <span><button className="btn btn-warning mx-2" onClick={() => handleCancel(ord._id)}>Cancel Order</button></span></li>
                        </ul>
                    ))
                }
            </div>
        </div>
    );
};

export default Order;