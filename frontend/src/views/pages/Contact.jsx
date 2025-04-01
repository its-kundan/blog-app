import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

function Contact() {
    return (
        <>
            <Header />
            <section className="contact-hero">
                <div className="container">
                    <div className="contact-header text-center">
                        <h1 className="contact-title">Get In Touch</h1>
                        <p className="contact-subtitle">Have questions or want to collaborate? Reach out and I'll respond as soon as possible.</p>
                    </div>
                </div>
            </section>

            <section className="contact-main">
                <div className="container">
                    <div className="contact-card">
                        <div className="contact-info">
                            <h2 className="info-title">Contact Information</h2>
                            <p className="info-text">Feel free to reach out for collaboration, projects, or queries.</p>
                            
                            <div className="info-item">
                                <i className="fas fa-envelope"></i>
                                <a href="mailto:kundan515kk@gmail.com">kundankumar@gmail.com</a>
                            </div>
                            
                            <div className="info-item">
                                <i className="fab fa-linkedin-in"></i>
                                <a href="https://www.linkedin.com/in/its-kundan/" target="_blank" rel="noopener noreferrer">linkedin.com/in/its-kundan</a>
                            </div>
                            
                            <div className="info-item">
                                <i className="fab fa-github"></i>
                                <a href="https://github.com/its-kundan" target="_blank" rel="noopener noreferrer">github.com/its-kundan</a>
                            </div>
                            
                            <div className="info-item">
                                <i className="fab fa-twitter"></i>
                                <a href="https://x.com/kundan_k_" target="_blank" rel="noopener noreferrer">x.com/kundan_k_</a>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <h2 className="form-title">Send me a message</h2>
                            <p className="form-subtitle">Fill in the form below, and I'll get back to you as soon as possible.</p>
                            
                            <form className="contact-form" id="contact-form" name="contactform" method="POST">
                                <div className="form-group">
                                    <input required id="con-name" name="name" type="text" className="form-input" placeholder="Your Name" />
                                </div>
                                
                                <div className="form-group">
                                    <input required id="con-email" name="email" type="email" className="form-input" placeholder="Your Email" />
                                </div>
                                
                                <div className="form-group">
                                    <input required id="con-subject" name="subject" type="text" className="form-input" placeholder="Subject" />
                                </div>
                                
                                <div className="form-group">
                                    <textarea required id="con-message" name="message" className="form-input" placeholder="Your Message" rows="5"></textarea>
                                </div>
                                
                                <button className="submit-btn" type="submit">
                                    Send Message <i className="fas fa-paper-plane ms-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

            <style jsx>{`
                .contact-hero {
                    background: linear-gradient(135deg, rgba(72, 106, 184, 0.2) 0%, rgba(72, 106, 184, 0.1) 100%);
                    backdrop-filter: blur(10px);
                    padding: 5rem 0;
                    text-align: center;
                    border-bottom: 1px solid rgba(0, 0, 0, 0);
                }
                
                .contact-title {
                    font-size: 3rem;
                    font-weight: 700;
                    background: linear-gradient(90deg,rgb(0, 0, 0), #e0e0e0);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    margin-bottom: 1rem;
                }
                
                .contact-subtitle {
                    font-size: 1.25rem;
                    color: rgba(0, 0, 0, 0.8);
                    max-width: 700px;
                    margin: 0 auto;
                }
                
                .contact-main {
                    padding: 4rem 0;
                }
                
                .contact-card {
                    background: rgba(15, 23, 42, 0.7);
                    backdrop-filter: blur(10px);
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(163, 157, 157, 0.1);
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .contact-info {
                    padding: 3rem;
                    background: rgba(47, 50, 231, 0.88);
                }
                
                .info-title {
                    font-size: 1.75rem;
                    color: white;
                    margin-bottom: 1.5rem;
                    position: relative;
                    padding-bottom: 0.75rem;
                }
                
                .info-title::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 50px;
                    height: 3px;
                    background: linear-gradient(90deg, #6366f1, #8b5cf6);
                }
                
                .info-text {
                    color: rgba(255, 255, 255, 0.7);
                    margin-bottom: 2rem;
                    line-height: 1.6;
                }
                
                .info-item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }
                
                .info-item i {
                    width: 40px;
                    height: 40px;
                    background: rgba(176, 169, 169, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 1rem;
                    color: #8b5cf6;
                }
                
                .info-item a {
                    color: rgba(255, 255, 255, 0.8);
                    text-decoration: none;
                    transition: all 0.3s;
                }
                
                .info-item a:hover {
                    color: #8b5cf6;
                }
                
                .contact-form-wrapper {
                    padding: 3rem;
                }
                
                .form-title {
                    font-size: 1.75rem;
                    color: white;
                    margin-bottom: 0.5rem;
                }
                
                .form-subtitle {
                    color: rgba(255, 255, 255, 0.6);
                    margin-bottom: 2rem;
                }
                
                .form-group {
                    margin-bottom: 1.5rem;
                }
                
                .form-input {
                    width: 100%;
                    padding: 0.75rem 1rem;
                    background: rgba(233, 233, 233, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: white;
                    transition: all 0.3s;
                }
                
                .form-input:focus {
                    outline: none;
                    border-color: #8b5cf6;
                    background: rgba(255, 255, 255, 0.1);
                    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2);
                }
                
                textarea.form-input {
                    min-height: 150px;
                    resize: vertical;
                }
                
                .submit-btn {
                    background: linear-gradient(90deg, #6366f1, #8b5cf6);
                    color: white;
                    border: none;
                    padding: 0.75rem 2rem;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                    width: 100%;
                }
                
                .submit-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
                }
                
                @media (max-width: 992px) {
                    .contact-card {
                        grid-template-columns: 1fr;
                    }
                    
                    .contact-info, .contact-form-wrapper {
                        padding: 2rem;
                    }
                }
                
                @media (max-width: 576px) {
                    .contact-title {
                        font-size: 2.25rem;
                    }
                    
                    .contact-subtitle {
                        font-size: 1rem;
                    }
                    
                    .info-title, .form-title {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </>
    );
}

export default Contact;