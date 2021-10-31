import React from 'react';

const About = () => {
    return (
        <div style={{ backgroundColor: '#7DEDFF' }}>
            <div class="container" id="about">
                <h3 className="mb-4">Our Adventures...</h3>
                <div class="row">
                    <div class="col-12 col-md-4 border p-2 rounded">
                        <div>
                            <img height="50" src="https://i.ibb.co/zsVJPZc/fishing-boat-1.jpg" alt="" className="img-fluid" />
                            <h4>Responsibly Sourced</h4>
                            <p>Responsibly-sourced seafood is the key to the modern, safe and profitable seafood industry.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 border p-2 rounded">
                        <div>
                            <img height="50" src="https://i.ibb.co/Jtjp8xS/iceberg-1.jpg" alt="" className="img-fluid" />
                            <h4>Environment</h4>
                            <p>The seafood industry has a concern over climate impact, and takes responsibility in any case.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 border p-2 rounded">
                        <div>
                            <img src="https://i.ibb.co/ZTLV1HD/istockphoto-1.jpg" alt="" className="img-fluid" />
                            <h4>Staff</h4>
                            <p>Our experts work hard to maintain the quality seafood for our dear customers exclusively.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;