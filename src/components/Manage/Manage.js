import React, { useEffect, useState } from 'react';

const Manage = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleReject = (id) => {
        const proceed = window.confirm('Are you sure about that?');
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    if (data) {
                        alert('Successfully Deleted!');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                        window.history.go(0);
                    }
                })
        }
    }

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                alert('Successfully Approved the order!')
                window.history.go(0);
            })
    }
    return (
        <div className="container">
            <h2>Manage all orders</h2>
            <div>
                {
                    orders.map(order => (
                        <div key={order.id} className="border rounded p-2">
                            <h5>Email: {order.email}</h5>
                            <p>Product Id: {order.id}</p>
                            <p>Title: {order.title}</p>
                            <p>Quatity: {order.quantity}</p>
                            <p>Status: {order?.status}</p>
                            <button className="btn btn-danger" onClick={() => handleReject(order._id)}>Reject Order</button>
                            <button className="btn btn-warning mx-2" onClick={() => handleUpdate(order._id)}>Approve</button>

                        </div>
                    )
                    )
                }
            </div>
        </div>
    );
};

export default Manage;