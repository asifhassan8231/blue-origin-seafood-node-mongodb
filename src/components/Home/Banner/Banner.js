import React from 'react';
import image from '../../../images/logo.jpg';
const Banner = () => {
    return (
        <div style={{ backgroundColor: '#dffbff' }}>
            <div className="container">
                <div className="row flex align-items-center">
                    <div className="col-12 col-md-6">
                        <h1>BLUE ORIGIN</h1>
                        <h1>Seafood Delivery Service</h1>
                        <h4 style={{ color: '#2d334a' }}>We guarantee you the best seafood, delivered daily to our dock, prepared to your liking. Our focus is on serving the absolute freshest fish and seafood.</h4>
                    </div>
                    <div className="col-12 col-md-6">
                        <div>
                            <img src={image} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;