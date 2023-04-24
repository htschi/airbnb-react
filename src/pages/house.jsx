function House() {
    return (
        <div>
            {/* TOP Container with Logo and Account+Login Button */}
            <div className="container p-2">
                <div className="row">
                    {/* Logo */}
                    <div className="col align-self-center">
                        <img src="images/logo-airbnb.png" className="w-25" />
                    </div>
                    {/* Buttons / Links */}
                    <div className="col text-end">
                        <a className="btn btn-outline-secondary">
                            <img src="https://randomuser.me/api/portraits/men/11.jpg" id="avatar-login" />
                            <span>Name</span>
                        </a>
                        <a type="button" className="btn btn-outline-secondary">Login</a>
                    </div>
                </div>
            </div>
            {/* Container with House Pictures */}
            <div className="row border border-1">
                {/* Big Main Picture */}
                <div className="col-12 col-md-6">
                    <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png" className="img-fluid h-100" id="big-picture" />
                </div>
                {/* Small Pictures */}
                <div className="col-12 col-md-6">
                    <div className="row row-cols-3">
                        <div className="col p-2">
                            <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png" className="img-fluid" />
                        </div>
                        <div className="col p-2">
                            <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png" className="img-fluid" />
                        </div>
                        <div className="col p-2">
                            <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png" className="img-fluid" />
                        </div>
                        <div className="col p-2">
                            <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png" className="img-fluid" />
                        </div>
                        <div className="col p-2">
                            <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png" className="img-fluid" />
                        </div>
                        <div className="col p-2">
                            <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png" className="img-fluid" />
                        </div>
                        <div className="col p-2">
                            <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png" className="img-fluid" />
                        </div>
                        <div className="col p-2">
                            <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png" className="img-fluid" />
                        </div>
                        <div className="col p-2">
                            <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Container Text and Textarea */}
            <div className="container mt-3">
                <div className="row">
                    {/* Container Left Side */}
                    <div className="col-12 col-md-8">
                        <h2>Luxury Villa in Chaweng</h2>
                        <p className="card-text fs-6 fw-normal">
                            <small><i className="fa-solid fa-location-dot"></i> City • X Rooms</small>
                        </p>
                        <div className="row">
                            <div className="col-1 d-flex align-items-center">
                                <img src="https://randomuser.me/api/portraits/men/33.jpg" id="avatar-house" />
                            </div>
                            <div className="col-11 pt-3">
                                <span className="fs-6 text-muted"><small>Hosted by</small></span>
                                <p>Firstname Lastname</p>
                            </div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <h2 className="mt-5">0 Reviews</h2>
                        <span>Leave a review</span>
                        <form>
                            <div>
                                <textarea className="form-control" rows="3"></textarea>
                            </div>
                            {/* Dumbs up & Dumps Down Button */}
                            <div className="mt-2 mb-2">
                                <button type="button" className="btn btn-outline-secondary">
                                    <i className="fa-solid fa-thumbs-up"></i>
                                </button>
                                <button type="button" className="btn btn-outline-secondary">
                                    <i className="fa-solid fa-thumbs-down"></i>
                                </button>
                            </div>
                            {/* Submit Button */}
                            <a href="#" className="btn btn-primary">Submit</a>
                        </form>
                        {/* With Reviews */}
                        <div className="card mb-4 mt-5">
                            <div className="container">
                                <div className="row g-0">
                                    <div className="col-md-1 pt-3">
                                        <img src="https://randomuser.me/api/portraits/men/13.jpg" id="avatar-house" />
                                    </div>
                                    <div className="col-md-10">
                                        <p className="text-muted mt-3"><small>02 Jan 2020 - 01:01</small></p>
                                        <h5 className="mt-1">Firstname Lastname</h5>
                                        <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    <div className="col-md-1 text-end mt-2">
                                        <i className="fa-solid fa-thumbs-up"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4 mt-3">
                            <div className="container">
                                <div className="row g-0">
                                    <div className="col-md-1 pt-3">
                                        <img src="https://randomuser.me/api/portraits/men/13.jpg" id="avatar-house" />
                                    </div>
                                    <div className="col-md-10">
                                        <p className="text-muted mt-3"><small>02 Jan 2020 - 01:01</small></p>
                                        <h5 className="mt-1">Firstname Lastname</h5>
                                        <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    <div className="col-md-1 text-end mt-2">
                                        <i className="fa-solid fa-thumbs-up"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Container Right Side */}
                    <div className="col-12 col-md-4">
                        {/* Without Review */}
                        {/* <!--<div className="card" style="width: 18rem; height: 16rem;">
                <div className="card-body">
                <h5 className="card-title">$150/night</h5>
                <p className="card-text">0 reviews</p>
                <div className="mb-3">
                    <textarea className="form-control" rows="3"></textarea>
                </div>
                <a href="#" className="btn btn-primary">Request booking</a>
                </div>
            </div> --> */}
                        {/* Review Submitted */}
                        <div className="card" style="width: 18rem;">
                            <div className="card-body">
                                <h5 className="card-title">$150/night</h5>
                                <p className="card-text"><small><i className="fa-solid fa-thumbs-up"></i> 0 reviews</small></p>
                                <div className="row">
                                    <div className="alert alert-success" role="alert">
                                        <span>Thank you for your enquiry.<br /><small>Sent on 02 Jan 2020 - 01:01 </small></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
