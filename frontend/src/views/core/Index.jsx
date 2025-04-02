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
    const [selectedPost, setSelectedPost] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Sample blog data for featured articles
    const blogDetails = {
        "web-development-trends": {
            title: "The Future of Web Development",
            author: "John Doe",
            date: moment().format("YYYY-MM-DD"),
            views: 1024,
            likes: 42,
            content: `
                <p>Web development continues to evolve at a rapid pace. In 2023, we're seeing several key trends shaping the industry:</p>
                <ul>
                    <li>Increased adoption of WebAssembly for high-performance applications</li>
                    <li>Progressive Web Apps (PWAs) becoming the standard for mobile experiences</li>
                    <li>Serverless architectures dominating backend development</li>
                    <li>AI-powered development tools gaining traction</li>
                </ul>
                <p>These trends indicate a shift toward more performant, scalable, and user-friendly web applications.</p>
            `,
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        "mastering-react-hooks": {
            title: "Mastering React Hooks in 2023",
            author: "Jane Smith",
            date: moment().subtract(2, 'days').format("YYYY-MM-DD"),
            views: 892,
            likes: 36,
            content: `
                <p>React Hooks have revolutionized how we write React components. Here's what you need to know:</p>
                <h3>useState</h3>
                <p>The most basic hook for managing component state.</p>
                <h3>useEffect</h3>
                <p>Handles side effects in functional components, replacing lifecycle methods.</p>
                <h3>Custom Hooks</h3>
                <p>Create reusable logic that can be shared across components.</p>
                <p>By mastering these concepts, you'll write cleaner, more maintainable React code.</p>
            `,
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        "css-grid-flexbox": {
            title: "CSS Grid vs Flexbox: Ultimate Guide",
            author: "Alex Johnson",
            date: moment().subtract(5, 'days').format("YYYY-MM-DD"),
            views: 756,
            likes: 28,
            content: `
                <p>Understanding when to use CSS Grid versus Flexbox is crucial for modern layouts:</p>
                <h3>CSS Grid</h3>
                <p>Best for two-dimensional layouts (rows and columns simultaneously)</p>
                <h3>Flexbox</h3>
                <p>Ideal for one-dimensional layouts (either rows or columns)</p>
                <p>In many cases, you'll want to combine both for optimal results.</p>
            `,
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        "javascript-best-practices": {
            title: "JavaScript Best Practices for Clean Code",
            author: "Sarah Williams",
            date: moment().subtract(7, 'days').format("YYYY-MM-DD"),
            views: 1132,
            likes: 51,
            content: `
                <p>Writing clean JavaScript is essential for maintainable code:</p>
                <h3>Variable Naming</h3>
                <p>Use descriptive names that indicate purpose</p>
                <h3>Function Length</h3>
                <p>Keep functions small and focused on a single task</p>
                <h3>Error Handling</h3>
                <p>Always handle potential errors gracefully</p>
                <p>Following these practices will make your code more readable and maintainable.</p>
            `,
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    };

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

    const handleOpenDialog = (post) => {
        setSelectedPost(post);
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

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

    return (
        <div className="home-page">
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

            {/* Featured Blogs */}
            <section className="posts-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured Articles</h2>
                        <div className="section-line"></div>
                    </div>
                    
                    <div className="posts-grid">
                        {/* Blog 1 */}
                        <div className="post-card" onClick={() => handleOpenDialog(blogDetails['web-development-trends'])}>
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
                        <div className="post-card" onClick={() => handleOpenDialog(blogDetails['mastering-react-hooks'])}>
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
                        <div className="post-card" onClick={() => handleOpenDialog(blogDetails['css-grid-flexbox'])}>
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
                        <div className="post-card" onClick={() => handleOpenDialog(blogDetails['javascript-best-practices'])}>
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
            {/* Blog Card 1 */}
            <div className="post-card">
                <div className="post-image">
                    <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Web Development" />
                </div>
                <div className="post-content">
                    <h3>
                        <Link to="/blog/web-development">Introduction to Web Development</Link>
                    </h3>
                    <div className="post-meta">
                        <span><i className="fas fa-user"></i> John Smith</span>
                        <span><i className="fas fa-calendar"></i> 15 May, 2023</span>
                    </div>
                </div>
            </div>

            {/* Blog Card 2 */}
            <div className="post-card">
                <div className="post-image">
                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="React JS" />
                </div>
                <div className="post-content">
                    <h3>
                        <Link to="/blog/react-basics">React JS Fundamentals</Link>
                    </h3>
                    <div className="post-meta">
                        <span><i className="fas fa-user"></i> Sarah Johnson</span>
                        <span><i className="fas fa-calendar"></i> 10 May, 2023</span>
                    </div>
                </div>
            </div>

            {/* Blog Card 3 */}
            <div className="post-card">
                <div className="post-image">
                    <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="CSS" />
                </div>
                <div className="post-content">
                    <h3>
                        <Link to="/blog/css-mastery">CSS Layout Techniques</Link>
                    </h3>
                    <div className="post-meta">
                        <span><i className="fas fa-user"></i> Mike Williams</span>
                        <span><i className="fas fa-calendar"></i> 5 May, 2023</span>
                    </div>
                </div>
            </div>

            {/* Blog Card 4 */}
            <div className="post-card">
                <div className="post-image">
                    <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="JavaScript" />
                </div>
                <div className="post-content">
                    <h3>
                        <Link to="/blog/javascript-tips">JavaScript Best Practices</Link>
                    </h3>
                    <div className="post-meta">
                        <span><i className="fas fa-user"></i> Emily Davis</span>
                        <span><i className="fas fa-calendar"></i> 1 May, 2023</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

            {/* Blog Dialog */}
            {isDialogOpen && selectedPost && (
                <div className="blog-dialog-overlay" onClick={handleCloseDialog}>
                    <div className="blog-dialog-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-dialog-btn" onClick={handleCloseDialog}>
                            <i className="fas fa-times"></i>
                        </button>
                        
                        <div className="dialog-header">
                            <h2>{selectedPost.title}</h2>
                            <div className="dialog-meta">
                                <span><i className="fas fa-user"></i> {selectedPost.profile?.full_name || selectedPost.author}</span>
                                <span><i className="fas fa-calendar"></i> {moment(selectedPost.date).format("DD MMM, YYYY")}</span>
                                <span><i className="fas fa-eye"></i> {selectedPost.view || selectedPost.views} Views</span>
                            </div>
                        </div>
                        
                        <div className="dialog-image">
                            <img src={selectedPost.image} alt={selectedPost.title} />
                        </div>
                        
                        <div 
                            className="dialog-body" 
                            dangerouslySetInnerHTML={{ __html: selectedPost.content || selectedPost.description }}
                        />
                        
                        <div className="dialog-footer">
                            <button onClick={() => {
                                handleLikePost(selectedPost.id);
                            }} className="like-btn">
                                <i className={`fas fa-thumbs-up ${selectedPost.is_liked ? 'text-primary' : ''}`}></i>
                                <span>{selectedPost.likes?.length || selectedPost.likes}</span>
                            </button>
                            <button onClick={() => {
                                handleBookmarkPost(selectedPost.id);
                            }} className="bookmark-btn">
                                <i className={`fas fa-bookmark ${selectedPost.is_bookmarked ? 'text-danger' : ''}`}></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
            <style jsx>{`
                .blog-dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    padding: 2rem;
    overflow-y: auto;
}

.blog-dialog-content {
    background: rgba(15, 23, 42, 0.95);
    border-radius: 12px;
    width: 100%;
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    padding: 2rem;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.close-dialog-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.2s;
}

.close-dialog-btn:hover {
    color: white;
}

.dialog-header {
    margin-bottom: 1.5rem;
}

.dialog-header h2 {
    color: white;
    margin-bottom: 0.5rem;
}

.dialog-meta {
    display: flex;
    gap: 1.5rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.dialog-meta i {
    margin-right: 0.25rem;
}

.dialog-image {
    width: 100%;
    height: 400px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 2rem;
}

.dialog-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.dialog-body {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.7;
    margin-bottom: 2rem;
}

.dialog-body h3 {
    color: white;
    margin: 1.5rem 0 1rem;
}

.dialog-body p {
    margin-bottom: 1rem;
}

.dialog-body ul {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
}

.dialog-footer {
    display: flex;
    gap: 1rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.like-btn, .bookmark-btn {
    background: rgba(99, 102, 241, 0.1);
    border: 1px solid rgba(99, 102, 241, 0.3);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.2s;
}

.like-btn:hover, .bookmark-btn:hover {
    background: rgba(99, 102, 241, 0.3);
}

@media (max-width: 768px) {
    .blog-dialog-content {
        padding: 1.5rem;
    }
    
    .dialog-image {
        height: 250px;
    }
    
    .dialog-meta {
        flex-direction: column;
        gap: 0.5rem;
    }
}
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

            {/* ... existing styles ... */}
        </div>
    );
}

export default Index;