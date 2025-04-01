import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
function About() {
    return (
        <>
            <Header />

            <section className="pt-4 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h2>Our Story</h2>
                            <p className="lead">
                                Welcome to our blog app, where ideas meet creativity. Our journey started with a simple vision: to create a platform where people can express their thoughts, share knowledge, and engage with a like-minded community. We believe that stories, insights, and discussions shape perspectives and inspire action.
                            </p>
                            <p>
                                Our platform offers a seamless experience for both readers and writers. Whether you're here to discover insightful articles, share your expertise, or engage in meaningful discussions, our blog app provides the tools to make it happen. We prioritize quality content, user engagement, and a welcoming environment for all voices.
                            </p>
                            <h3 className="mt-4">We do this across:</h3>
                            <ul>
                                <li>Encouraging writers to share their stories, opinions, and expertise on diverse topics.</li>
                                <li>Providing a user-friendly interface for a seamless reading and writing experience.</li>
                                <li>Facilitating meaningful discussions through comments and interactive features.</li>
                                <li>Ensuring content reaches the right audience through personalized recommendations.</li>
                            </ul>
                            <h3 className="mb-3 mt-5">Our Team</h3>
                            <div className="row g-4">
                                <div className="col-sm-6 col-lg-3">
                                    <div className="text-center">
                                        <div className="avatar avatar-xxl mb-2">
                                            <img className="avatar-img rounded-circle" style={{ width: "100px", height: "100px", objectFit: "cover" }} src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" alt="avatar" />
                                        </div>
                                        <h5>Louis Ferguson</h5>
                                        <p className="m-0">Editor in Chief</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="text-center">
                                        <div className="avatar avatar-xxl mb-2">
                                            <img className="avatar-img rounded-circle" style={{ width: "100px", height: "100px", objectFit: "cover" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVSPtLWfht2p015onFngljcoIuA9xc8h3RLA&usqp=CAU" alt="avatar" />
                                        </div>
                                        <h5>Frances Guerrero</h5>
                                        <p className="m-0">Managing Editor</p>
                                    </div>
                                </div>
                            </div>
                            {/* Service START */}
                            <h3 className="mb-3 mt-5">What we do</h3>
                            <div className="row">
                                <div className="col-md-6 col-lg-4 mb-4">
                                    <img className="rounded" style={{ width: "100%", height: "170px", objectFit: "cover" }} src="https://www.aspistrategist.org.au/wp-content/uploads/2023/11/GettyImages-467714941-1024x764.jpg" alt="Card image" />
                                    <h4 className="mt-3">Content Creation</h4>
                                    <p>We empower writers to create and share high-quality articles on a variety of topics.</p>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-4">
                                    <img className="rounded" style={{ width: "100%", height: "170px", objectFit: "cover" }} src="https://www.varletmachines.com/sites/default/files/styles/large/public/2022-04/Commercial.png?itok=jE81FZ_E" alt="Card image" />
                                    <h4 className="mt-3">Community Engagement</h4>
                                    <p>Our platform fosters discussions, interactions, and networking among users.</p>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-4">
                                    <img className="rounded" style={{ width: "100%", height: "170px", objectFit: "cover" }} src="https://www.columbiasouthern.edu/media/azmjow33/fire-ems-cj-public-service.jpg" alt="Card image" />
                                    <h4 className="mt-3">Personalized Experience</h4>
                                    <p>We curate content based on user preferences, ensuring a relevant and engaging experience.</p>
                                </div>
                            </div>
                            {/* Service END */}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default About;
