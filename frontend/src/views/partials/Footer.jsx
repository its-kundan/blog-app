import React from "react";

function Footer() {
    return (
        <footer className="footer-glass">
            <div className="container">
                <div className="footer-content">
                    {/* Main Footer Content */}
                    <div className="footer-grid">
                        {/* About Section */}
                        <div className="footer-section">
                            <h3 className="footer-heading">
                                <span className="logo-gradient">BlogVerse</span>
                            </h3>
                            <p className="footer-text">
                                A modern blogging platform for creators and thinkers. Share your ideas with the world.
                            </p>
                            <div className="footer-contact">
                                <a href="mailto:kundan515kk@gmail.com" className="contact-link">
                                    <i className="fas fa-envelope me-2"></i> kundan515kk@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-section">
                            <h4 className="footer-subheading">Quick Links</h4>
                            <ul className="footer-links">
                                <li><a href="/">Home</a></li>
                                <li><a href="/category/">Categories</a></li>
                                <li><a href="/about/">About Us</a></li>
                                <li><a href="/contact/">Contact</a></li>
                                <li><a href="/faq/">FAQ</a></li>
                                <li><a href="/privacy-policy/">Privacy Policy</a></li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className="footer-section">
                            <h4 className="footer-subheading">Connect With Me</h4>
                            <div className="social-links">
                                <a href="https://linkedin.com/in/its-kundan" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://x.com/kundan_k_" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://github.com/its-kundan" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://instagram.com/curious_kundan" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>

                            {/* Newsletter */}
                            <div className="newsletter">
                                <h4 className="footer-subheading">Newsletter</h4>
                                <form className="newsletter-form">
                                    <input type="email" placeholder="Your email" className="newsletter-input" />
                                    <button type="submit" className="newsletter-button">
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="footer-bottom">
                        <div className="copyright">
                            © {new Date().getFullYear()} BlogVerse. All rights reserved.
                        </div>
                        <div className="developer-credit">
                            Designed & Developed with <i className="fas fa-heart text-danger"></i> by{" "}
                            <a href="https://github.com/its-kundan" target="_blank" rel="noopener noreferrer">
                                Kundan Kumar
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Styles */}
            <style jsx>{`
                .footer-glass {
                    background: rgba(15, 23, 42, 0.9);
                    backdrop-filter: blur(10px);
                    color: rgba(255, 255, 255, 0.8);
                    padding: 3rem 0 1rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    margin-bottom: 2rem;
                }
                
                .footer-section {
                    padding: 0 1rem;
                }
                
                .logo-gradient {
                    background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    font-weight: 700;
                    font-size: 1.8rem;
                }
                
                .footer-heading {
                    color: white;
                    margin-bottom: 1rem;
                    font-size: 1.5rem;
                }
                
                .footer-subheading {
                    color: white;
                    margin-bottom: 1rem;
                    font-size: 1.1rem;
                    position: relative;
                    padding-bottom: 0.5rem;
                }
                
                .footer-subheading::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 50px;
                    height: 2px;
                    background: linear-gradient(90deg, #6366f1, #8b5cf6);
                }
                
                .footer-text {
                    margin-bottom: 1rem;
                    line-height: 1.6;
                }
                
                .contact-link {
                    color: rgba(255, 255, 255, 0.8);
                    text-decoration: none;
                    display: inline-block;
                    margin-bottom: 0.5rem;
                    transition: all 0.3s;
                }
                
                .contact-link:hover {
                    color: #8b5cf6;
                    transform: translateX(5px);
                }
                
                .footer-links {
                    list-style: none;
                    padding: 0;
                }
                
                .footer-links li {
                    margin-bottom: 0.5rem;
                }
                
                .footer-links a {
                    color: rgba(255, 255, 255, 0.7);
                    text-decoration: none;
                    transition: all 0.3s;
                    position: relative;
                    padding-left: 1rem;
                }
                
                .footer-links a::before {
                    content: '→';
                    position: absolute;
                    left: 0;
                    opacity: 0;
                    transition: all 0.3s;
                }
                
                .footer-links a:hover {
                    color: #8b5cf6;
                    padding-left: 1.5rem;
                }
                
                .footer-links a:hover::before {
                    opacity: 1;
                    left: 0;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 2rem;
                }
                
                .social-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s;
                }
                
                .social-icon:hover {
                    background: linear-gradient(90deg, #6366f1, #8b5cf6);
                    transform: translateY(-3px);
                }
                
                .newsletter-form {
                    display: flex;
                    margin-top: 1rem;
                }
                
                .newsletter-input {
                    flex: 1;
                    padding: 0.5rem 1rem;
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 50px 0 0 50px;
                    color: white;
                    outline: none;
                }
                
                .newsletter-button {
                    background: linear-gradient(90deg, #6366f1, #8b5cf6);
                    color: white;
                    border: none;
                    border-radius: 0 50px 50px 0;
                    padding: 0 1rem;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                
                .newsletter-button:hover {
                    opacity: 0.9;
                }
                
                .footer-bottom {
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    padding-top: 1.5rem;
                    margin-top: 2rem;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .copyright, .developer-credit {
                    font-size: 0.9rem;
                    color: rgba(255, 255, 255, 0.6);
                }
                
                .developer-credit a {
                    color: rgba(255, 255, 255, 0.8);
                    text-decoration: none;
                    transition: all 0.3s;
                }
                
                .developer-credit a:hover {
                    color: #8b5cf6;
                }
                
                @media (max-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .footer-bottom {
                        flex-direction: column;
                        text-align: center;
                        gap: 1rem;
                    }
                }
            `}</style>
        </footer>
    );
}

export default Footer;