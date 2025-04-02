import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/auth";

function Header() {
    const [isLoggedIn, user] = useAuthStore((state) => [state.isLoggedIn, state.user]);
    return (
        <header className="header-glass " style={{ zIndex: 9999 }}>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    {/* Logo with gradient text */}
                    <Link className="navbar-brand" to="/">
                        <span className="logo-gradient">BlogVerse</span>
                    </Link>

                    {/* Mobile menu button */}
                    {/* Mobile menu button */}
<button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    <span className="navbar-toggler-icon"></span>
</button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        {/* Search bar - more prominent */}
                        <div className="search-container mx-3 my-2 my-lg-0">
                            <form className="search-form">
                                <input 
                                    className="search-input" 
                                    type="search" 
                                    placeholder="Search articles..." 
                                    aria-label="Search" 
                                />
                                <button className="search-button" type="submit">
                                    <i className="bi bi-search"></i>
                                </button>
                            </form>
                        </div>

                        {/* Main navigation - more compact and stylish */}
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link hover-underline" to="/">
                                    <i className="bi bi-house-door me-1"></i> Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link hover-underline" to="/category/">
                                    <i className="bi bi-collection me-1"></i> Categories
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle hover-underline" href="#" id="pagesMenu" data-bs-toggle="dropdown">
                                    <i className="bi bi-file-earmark-text me-1"></i> Pages
                                </a>
                                <ul className="dropdown-menu dropdown-menu-glass">
                                    <li>
                                        <Link className="dropdown-item" to="/about/">
                                            <i className="bi bi-person-lines-fill me-2"></i> About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/contact/">
                                            <i className="bi bi-telephone-fill me-2"></i> Contact
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {isLoggedIn() && (
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle hover-underline" href="#" id="dashboardMenu" data-bs-toggle="dropdown">
                                        <i className="bi bi-speedometer2 me-1"></i> Dashboard
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-glass">
                                        <li>
                                            <Link className="dropdown-item" to="/dashboard/">
                                                <i className="fas fa-user me-2"></i> Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/posts/">
                                                <i className="bi bi-grid-fill me-2"></i> Posts
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/add-post/">
                                                <i className="fas fa-plus-circle me-2"></i> Add Post
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/comments/">
                                                <i className="bi bi-chat-left-quote-fill me-2"></i> Comments
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/notifications/">
                                                <i className="fas fa-bell me-2"></i> Notifications
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/profile/">
                                                <i className="fas fa-user-gear me-2"></i> Profile
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            )}
                        </ul>

                        {/* Auth buttons - more modern look */}
                        <div className="auth-buttons">
                            {isLoggedIn() ? (
                                <>
                                    <Link to="/dashboard/" className="btn btn-primary btn-sm mx-1">
                                        <i className="bi bi-speedometer2"></i>
                                    </Link>
                                    <Link to="/logout/" className="btn btn-danger btn-sm mx-1">
                                        <i className="fas fa-sign-out-alt"></i>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/login/" className="btn btn-outline-light btn-sm mx-1">
                                        Login
                                    </Link>
                                    <Link to="/register/" className="btn btn-primary btn-sm mx-1">
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Add some CSS for the glass effect */}
            <style jsx>{`
                /* Custom toggler color */
    .custom-toggler .navbar-toggler-icon {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
    
    .custom-toggler {
        border-color: rgba(0, 0, 0, 0.1);
    }
    
    /* Rest of your existing styles... */
    .header-glass {
        background: rgba(183, 195, 223, 0.8);
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 30px rgba(216, 37, 37, 0.1);
        border-bottom: 1px solid rgba(225, 225, 225, 0.1);
    }
                .header-glass {
                    background: rgba(0, 0, 0, 0.8);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 4px 30px rgba(216, 37, 37, 0.1);
                    border-bottom: 1px solid rgba(225, 225, 225, 0.1);
                }
                
                .logo-gradient {
                    background: linear-gradient(90deg,rgb(1, 12, 15),rgb(12, 2, 38),rgb(20, 9, 14));
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    font-weight: 700;
                    font-size: 1.8rem;
                    letter-spacing: 1px;
                }
                
                .search-container {
                    flex: 1;
                    max-width: 500px;
                }
                
                .search-form {
                    position: relative;
                    display: flex;
                }
                
                .search-input {
                    width: 100%;
                    padding: 0.5rem 1rem;
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 50px;
                    color: white;
                    transition: all 0.3s;
                }
                
                .search-input:focus {
                    outline: none;
                    background: rgba(255, 255, 255, 0.2);
                    box-shadow: 0 0 0 3px rgba(206, 203, 228, 0.3);
                }
                
                .search-button {
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.7);
                }
                
                .nav-link {
                    color: rgba(255, 255, 255, 0.8) !important;
                    font-weight: 500;
                    padding: 0.5rem 1rem !important;
                    transition: all 0.3s;
                }
                
                .nav-link:hover, .nav-link:focus {
                    color: white !important;
                }
                
                .hover-underline {
                    position: relative;
                }
                
                .hover-underline::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 1rem;
                    width: calc(100% - 2rem);
                    height: 2px;
                    background: linear-gradient(90deg,rgb(75, 78, 225), #8b5cf6);
                    transform: scaleX(0);
                    transition: transform 0.3s;
                }
                
                .hover-underline:hover::after {
                    transform: scaleX(1);
                }
                
                .dropdown-menu-glass {
                    background: rgba(15, 23, 42, 0.9);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(191, 167, 167, 0.1);
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                    z-index: 1000;
                }
                
                .dropdown-item {
                    color: rgba(255, 255, 255, 0.8) !important;
                    transition: all 0.2s;
                    z-index: 1000;
                }
                
                .dropdown-item:hover {
                    background: rgba(99, 102, 241, 0.2) !important;
                    color: white !important;
                    padding-left: 1.5rem !important;
                }
                
                .auth-buttons .btn {
                    border-radius: 50px;
                    padding: 0.5rem 1rem;
                    font-weight: 500;
                    transition: all 0.3s;
                }
                
                .auth-buttons .btn-outline-light:hover {
                    background: rgba(255, 255, 255, 0.1);
                }
                
                .auth-buttons .btn-primary {
                    background: linear-gradient(90deg, #6366f1, #8b5cf6);
                    border: none;
                }
            `}</style>
        </header>
    );
}

export default Header;