import { useState, useEffect } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";
import moment from "moment";
import apiInstance from "../../utils/axios";
import useUserData from "../../plugin/useUserData";
import Toast from "../../plugin/Toast";

function Index() {
    const [posts, setPosts] = useState([]);
    const [popularPosts, setPopularPosts] = useState([]);
    const [category, setCategory] = useState([]);

    const fetchPosts = async () => {
        const response = await apiInstance.get(`post/lists/`);
        setPosts(response.data);
    };

    const fetchPopularPost = () => {
        const sortedPopularPost = posts?.sort((a, b) => b.view - a.view);
        setPopularPosts(sortedPopularPost);
    };

    const fetchCategory = async () => {
        const response = await apiInstance.get(`post/category/list/`);
        setCategory(response.data);
    };

    useEffect(() => {
        fetchPosts();
        fetchCategory();
    }, []);

    useEffect(() => {
        fetchPopularPost();
    }, [posts]);

    // Pagination
    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const postItems = posts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(posts.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    const handleLikePost = async (postId) => {
        const jsonData = {
            user_id: useUserData()?.user_id,
            post_id: postId,
        };
        const response = await apiInstance.post(`post/like-post/`, jsonData);
        console.log(response.data);
        fetchPosts();
        Toast("success", response.data.message, "");
    };

    const handleBookmarkPost = async (postId) => {
        const jsonData = {
            user_id: useUserData()?.user_id,
            post_id: postId,
        };
        const response = await apiInstance.post(`post/bookmark-post/`, jsonData);
        console.log(response.data);
        fetchPosts();
        Toast("success", response.data.message, "");
    };

    return (
        <div className="home-page">
            {/* <Header /> */}
            
            <Header />
    
    {/* Hero Banner */}
    <section className="hero-banner">
        <div className="container">
            <div className="banner-content">
                <h1 className="banner-title">Trending Articles <span className="text-gradient">🔥</span></h1>
                <p className="banner-subtitle">Discover the most engaging content on our platform</p>
            </div>
        </div>
    </section>

    {/* Hardcoded Featured Blogs (Added Section) */}
    <section className="posts-section">
        <div className="container">
            <div className="section-header">
                <h2>Featured Articles</h2>
                <div className="section-line"></div>
            </div>
            
            <div className="posts-grid">
                {/* Blog 1 */}
                <div className="post-card">
                    <div className="post-image">
                        <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Web Development" />
                        <div className="post-actions">
                            <button className="action-btn">
                                <i className="fas fa-bookmark text-white"></i>
                            </button>
                            <button className="action-btn">
                                <i className="fas fa-thumbs-up text-white"></i>
                                <span>42</span>
                            </button>
                        </div>
                    </div>
                    <div className="post-content">
                        <h3>
                            <Link to="/blog/web-development-trends">The Future of Web Development</Link>
                        </h3>
                        <div className="post-meta">
                            <span><i className="fas fa-user"></i> John Doe</span>
                            <span><i className="fas fa-calendar"></i> {moment().format("DD MMM, YYYY")}</span>
                            <span><i className="fas fa-eye"></i> 1024 Views</span>
                        </div>
                    </div>
                </div>

                {/* Blog 2 */}
                <div className="post-card">
                    <div className="post-image">
                        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="React Hooks" />
                        <div className="post-actions">
                            <button className="action-btn">
                                <i className="fas fa-bookmark text-white"></i>
                            </button>
                            <button className="action-btn">
                                <i className="fas fa-thumbs-up text-white"></i>
                                <span>36</span>
                            </button>
                        </div>
                    </div>
                    <div className="post-content">
                        <h3>
                            <Link to="/blog/mastering-react-hooks">Mastering React Hooks in 2023</Link>
                        </h3>
                        <div className="post-meta">
                            <span><i className="fas fa-user"></i> Jane Smith</span>
                            <span><i className="fas fa-calendar"></i> {moment().subtract(2, 'days').format("DD MMM, YYYY")}</span>
                            <span><i className="fas fa-eye"></i> 892 Views</span>
                        </div>
                    </div>
                </div>

                {/* Blog 3 */}
                <div className="post-card">
                    <div className="post-image">
                        <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="CSS Layouts" />
                        <div className="post-actions">
                            <button className="action-btn">
                                <i className="fas fa-bookmark text-white"></i>
                            </button>
                            <button className="action-btn">
                                <i className="fas fa-thumbs-up text-white"></i>
                                <span>28</span>
                            </button>
                        </div>
                    </div>
                    <div className="post-content">
                        <h3>
                            <Link to="/blog/css-grid-flexbox">CSS Grid vs Flexbox: Ultimate Guide</Link>
                        </h3>
                        <div className="post-meta">
                            <span><i className="fas fa-user"></i> Alex Johnson</span>
                            <span><i className="fas fa-calendar"></i> {moment().subtract(5, 'days').format("DD MMM, YYYY")}</span>
                            <span><i className="fas fa-eye"></i> 756 Views</span>
                        </div>
                    </div>
                </div>

                {/* Blog 4 */}
                <div className="post-card">
                    <div className="post-image">
                        <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="JavaScript" />
                        <div className="post-actions">
                            <button className="action-btn">
                                <i className="fas fa-bookmark text-white"></i>
                            </button>
                            <button className="action-btn">
                                <i className="fas fa-thumbs-up text-white"></i>
                                <span>51</span>
                            </button>
                        </div>
                    </div>
                    <div className="post-content">
                        <h3>
                            <Link to="/blog/javascript-best-practices">JavaScript Best Practices for Clean Code</Link>
                        </h3>
                        <div className="post-meta">
                            <span><i className="fas fa-user"></i> Sarah Williams</span>
                            <span><i className="fas fa-calendar"></i> {moment().subtract(7, 'days').format("DD MMM, YYYY")}</span>
                            <span><i className="fas fa-eye"></i> 1132 Views</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

            {/* Latest Posts */}
            <section className="posts-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Latest Articles</h2>
                        <div className="section-line"></div>
                    </div>
                    
                    <div className="posts-grid">
                        {postItems?.map((p, index) => (
                            <div className="post-card" key={index}>
                                <div className="post-image">
                                    <img src={p.image} alt={p.title} />
                                    <div className="post-actions">
                                        <button onClick={() => handleBookmarkPost(p.id)} className="action-btn">
                                            <i className={`fas fa-bookmark ${p.is_bookmarked ? 'text-danger' : 'text-white'}`}></i>
                                        </button>
                                        <button onClick={() => handleLikePost(p.id)} className="action-btn">
                                            <i className={`fas fa-thumbs-up ${p.is_liked ? 'text-primary' : 'text-white'}`}></i>
                                            <span>{p.likes?.length}</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="post-content">
                                    <h3>
                                        <Link to={`${p.slug}`}>{p.title?.slice(0, 32) + (p.title.length > 32 ? "..." : "")}</Link>
                                    </h3>
                                    <div className="post-meta">
                                        <span><i className="fas fa-user"></i> {p.profile?.full_name}</span>
                                        <span><i className="fas fa-calendar"></i> {moment(p.date).format("DD MMM, YYYY")}</span>
                                        <span><i className="fas fa-eye"></i> {p.view} Views</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="pagination">
                        <button 
                            className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`} 
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <i className="fas fa-chevron-left"></i> Previous
                        </button>
                        
                        <div className="page-numbers">
                            {pageNumbers.map(number => (
                                <button 
                                    key={number} 
                                    className={`page-number ${currentPage === number ? 'active' : ''}`}
                                    onClick={() => setCurrentPage(number)}
                                >
                                    {number}
                                </button>
                            ))}
                        </div>
                        
                        <button 
                            className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`} 
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="categories-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Categories</h2>
                        <div className="section-line"></div>
                    </div>
                    
                    <div className="categories-grid">
                        {category?.map((c, index) => (
                            <Link to={`/category/${c.slug}/`} className="category-card" key={index}>
                                <div className="category-image">
                                    <img src={c.image} alt={c.title} />
                                </div>
                                <div className="category-content">
                                    <h3>{c.title}</h3>
                                    <p>{c.post_count} Articles</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Posts */}
            <section className="posts-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Popular Articles <span className="text-gradient">🕒</span></h2>
                        <div className="section-line"></div>
                    </div>
                    
                    <div className="posts-grid">
                        {popularPosts?.slice(0, 4).map((p, index) => (
                            <div className="post-card" key={index}>
                                <div className="post-image">
                                    <img src={p.image} alt={p.title} />
                                    <div className="popular-badge">🔥 Popular</div>
                                </div>
                                <div className="post-content">
                                    <h3>
                                        <Link to={`${p.slug}`}>{p.title?.slice(0, 32) + (p.title.length > 32 ? "..." : "")}</Link>
                                    </h3>
                                    <div className="post-meta">
                                        <span><i className="fas fa-user"></i> {p.profile?.full_name}</span>
                                        <span><i className="fas fa-calendar"></i> {moment(p.date).format("DD MMM, YYYY")}</span>
                                        <span><i className="fas fa-eye"></i> {p.view} Views</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
                .home-page {
                    background: rgba(33, 46, 74, 0.5);
                    min-height: 100vh;
                }
                
                /* Hero Banner */
                .hero-banner {
                    background: linear-gradient(135deg, rgba(72, 106, 184, 0.3) 0%, rgba(72, 106, 184, 0.2) 100%);
                    backdrop-filter: blur(10px);
                    padding: 5rem 0;
                    text-align: center;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .banner-title {
                    font-size: 3rem;
                    font-weight: 700;
                    color: white;
                    margin-bottom: 1rem;
                }
                
                .banner-subtitle {
                    font-size: 1.25rem;
                    color: rgba(216, 216, 216, 0.8);
                    max-width: 700px;
                    margin: 0 auto;
                }
                
                .text-gradient {
                    background: linear-gradient(90deg,rgb(88, 93, 243), #8b5cf6, #ec4899);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
                
                /* Sections */
                .posts-section, .categories-section {
                    padding: 4rem 0;
                }
                
                .section-header {
                    margin-bottom: 3rem;
                    position: relative;
                }
                
                .section-header h2 {
                    font-size: 2rem;
                    color: white;
                    position: relative;
                    display: inline-block;
                }
                
                .section-line {
                    height: 3px;
                    width: 80px;
                    background: linear-gradient(90deg, #6366f1, #8b5cf6);
                    margin-top: 0.5rem;
                }
                
                /* Posts Grid */
                .posts-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 2rem;
                }
                
                .post-card {
                    background: rgba(15, 23, 42, 0.7);
                    backdrop-filter: blur(10px);
                    border-radius: 12px;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.3s ease;
                }
                
                .post-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                }
                
                .post-image {
                    position: relative;
                    height: 200px;
                    overflow: hidden;
                }
                
                .post-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }
                
                .post-card:hover .post-image img {
                    transform: scale(1.05);
                }
                
                .post-actions {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    display: flex;
                    gap: 0.5rem;
                }
                
                .action-btn {
                    background: rgba(0, 0, 0, 0.5);
                    border: none;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                
                .action-btn:hover {
                    background: rgba(99, 102, 241, 0.8);
                }
                
                .action-btn span {
                    margin-left: 0.25rem;
                    font-size: 0.8rem;
                }
                
                .popular-badge {
                    position: absolute;
                    top: 1rem;
                    left: 1rem;
                    background: rgba(239, 68, 68, 0.8);
                    color: white;
                    padding: 0.25rem 0.75rem;
                    border-radius: 50px;
                    font-size: 0.8rem;
                    font-weight: 500;
                }
                
                .post-content {
                    padding: 1.5rem;
                }
                
                .post-content h3 {
                    margin-bottom: 1rem;
                    color: white;
                }
                
                .post-content h3 a {
                    color: white;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                
                .post-content h3 a:hover {
                    color:rgb(146, 121, 206);
                }
                
                .post-meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.9rem;
                }
                
                .post-meta i {
                    margin-right: 0.25rem;
                }
                
                /* Categories */
                .categories-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    gap: 2rem;
                }
                
                .category-card {
                    background: rgba(59, 67, 86, 0.7);
                    backdrop-filter: blur(10px);
                    border-radius: 12px;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.3s ease;
                    text-decoration: none;
                }
                
                .category-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                }
                
                .category-image {
                    height: 120px;
                    overflow: hidden;
                }
                
                .category-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }
                
                .category-card:hover .category-image img {
                    transform: scale(1.05);
                }
                
                .category-content {
                    padding: 1.5rem;
                    text-align: center;
                }
                
                .category-content h3 {
                    color: white;
                    margin-bottom: 0.5rem;
                }
                
                .category-content p {
                    color: rgba(255, 255, 255, 0.7);
                    margin-bottom: 0;
                    font-size: 0.9rem;
                }
                
                /* Pagination */
                .pagination {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 3rem;
                    gap: 1rem;
                }
                
                .pagination-btn {
                    background: rgba(22, 25, 199, 0.1);
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                }
                
                .pagination-btn:hover:not(.disabled) {
                    background: rgba(16, 19, 216, 0.3);
                }
                
                .pagination-btn.disabled {

                    opacity: 0.5;
                    cursor: not-allowed;
                }
                
                .page-numbers {
                    display: flex;
                    gap: 0.5rem;
                }
                
                .page-number {
                    background: rgba(4, 1, 1, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: white;
                    width: 36px;
                    height: 36px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                
                .page-number.active {
                    background: linear-gradient(90deg, #6366f1, #8b5cf6);
                    border-color: transparent;
                }
                
                .page-number:hover:not(.active) {
                    background: rgba(251, 251, 251, 0.1);
                }
                
                /* Responsive */
                @media (max-width: 768px) {
                    .hero-banner {
                        padding: 3rem 0;
                    }
                    
                    .banner-title {
                        font-size: 2rem;
                    }
                    
                    .banner-subtitle {
                        font-size: 1rem;
                    }
                    
                    .section-header h2 {
                        font-size: 1.5rem;
                    }
                    
                    .posts-grid, .categories-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                }
                
                @media (max-width: 576px) {
                    .posts-grid, .categories-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .pagination {
                        flex-direction: column;
                        gap: 0.5rem;
                    }
                }
            `}</style>
        </div>
    );
}

export default Index;