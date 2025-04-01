import React from "react";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        The Best <span className="text-gradient">Blog Website</span> for Creators
                    </h1>
                    <p className="hero-description">
                        Share your stories, connect with readers, and build your audience on our modern blogging platform. 
                        Whether you're a seasoned writer or just starting out, we provide the tools you need to succeed.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/register" className="btn btn-primary btn-lg">
                            Get Started <i className="fas fa-arrow-right ms-2"></i>
                        </Link>
                        <Link to="/about" className="btn btn-outline-light btn-lg ms-3">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="hero-stats">
                <div className="stat-item">
                    <div className="stat-number">10K+</div>
                    <div className="stat-label">Active Readers</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Creative Writers</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">1M+</div>
                    <div className="stat-label">Monthly Views</div>
                </div>
            </div>

            {/* Style */}
            <style jsx>{`
                .hero-section {
                    background: linear-gradient(135deg, rgba(72, 106, 184, 0.2) 0%, rgba(72, 106, 184, 0.1) 100%);
                    backdrop-filter: blur(10px);
                    padding: 6rem 0 4rem;
                    position: relative;
                    overflow: hidden;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .hero-section::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
                    z-index: -1;
                }

                .hero-content {
                    max-width: 800px;
                    margin: 0 auto;
                    text-align: center;
                    position: relative;
                    z-index: 2;
                }

                .hero-title {
                    font-size: 3.5rem;
                    font-weight: 800;
                    color: white;
                    margin-bottom: 1.5rem;
                    line-height: 1.2;
                }

                .text-gradient {
                    background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }

                .hero-description {
                    font-size: 1.25rem;
                    color: rgba(255, 255, 255, 0.9);
                    margin-bottom: 2.5rem;
                    line-height: 1.6;
                }

                .hero-buttons {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin-bottom: 3rem;
                }

                .btn-primary {
                    background: linear-gradient(90deg, #6366f1, #8b5cf6);
                    border: none;
                    border-radius: 50px;
                    padding: 0.75rem 2rem;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
                }

                .btn-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
                }

                .btn-outline-light {
                    border-radius: 50px;
                    padding: 0.75rem 2rem;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(5px);
                }

                .btn-outline-light:hover {
                    background: rgba(255, 255, 255, 0.2);
                    border-color: rgba(255, 255, 255, 0.5);
                }

                .hero-stats {
                    display: flex;
                    justify-content: center;
                    gap: 3rem;
                    flex-wrap: wrap;
                    margin-top: 2rem;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }

                .stat-item {
                    text-align: center;
                }

                .stat-number {
                    font-size: 2.5rem;
                    font-weight: 700;
                    background: linear-gradient(90deg, #ffffff, #e0e0e0);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    margin-bottom: 0.5rem;
                }

                .stat-label {
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.7);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2.5rem;
                    }

                    .hero-description {
                        font-size: 1.1rem;
                    }

                    .hero-buttons {
                        flex-direction: column;
                        align-items: center;
                    }

                    .btn-outline-light {
                        margin-left: 0 !important;
                        margin-top: 1rem;
                    }

                    .hero-stats {
                        gap: 1.5rem;
                    }

                    .stat-number {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </section>
    );
}

export default Hero;