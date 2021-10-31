import React from 'react';

const Blogs = () => {
    return (
        <div style={{ backgroundColor: '#A2DBFA' }}>
            <div class="container" id="blogs">
                <h2 className="mb-4">Recent News...</h2>
                <div class="row">
                    <div class="col-12 col-md-4 border p-2">
                        <div>
                            <img src="https://thumbs.dreamstime.com/b/fish-market-located-korean-pier-korea-fish-mark-209180851.jpg" alt="" className="img-fluid" />
                            <h6>21 July, 2021</h6>
                            <h4>Delights of Korean Seafood</h4>
                            <p>Seafood is a great part of Korean cuisine so you can find a whole aquarium of fishes waiting to be cooked almost in every restaurant of the country.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 border p-2">
                        <div>
                            <img src="https://thumbs.dreamstime.com/b/business-meeting-7736974.jpg" alt="" className="img-fluid" />
                            <h6>11 August, 2021</h6>
                            <h4>Partnership Announcement</h4>
                            <p>We are offering a warm, friendly atmosphere to share a delicious seafood meal with family and friends at any time of the day or evening.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 border p-2">
                        <div>
                            <img src="https://www.qafila.com/wp-content/uploads/2021/09/Shipping-Seafood.jpg" alt="" className="img-fluid" />
                            <h6>16 October, 2021</h6>
                            <h4>Seafood Industry</h4>
                            <p>The demand for seafood is growing. It becomes important for the entire fishing industry to move toward greater transparency and sustainability.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;