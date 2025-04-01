import { useState, useEffect } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";
import apiInstance from "../../utils/axios";
import useUserData from "../../plugin/useUserData";
import moment from "moment";
import Toast from "../../plugin/Toast";

function Dashboard() {
    const [stats, setStats] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [noti, setNoti] = useState([]);

    const userId = useUserData()?.user_id;

    const fetchDashboardData = async () => {
        const stats_res = await apiInstance.get(`author/dashboard/stats/${userId}/`);
        setStats(stats_res.data[0]);

        const post_res = await apiInstance.get(`author/dashboard/post-list/${userId}/`);
        setPosts(post_res.data);

        const comment_res = await apiInstance.get(`author/dashboard/comment-list/`);
        setComments(comment_res.data);

        const noti_res = await apiInstance.get(`author/dashboard/noti-list/${userId}/`);
        setNoti(noti_res.data);
    };

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const handleMarkNotiAsSeen = async (notiId) => {
        const response = await apiInstance.post("author/dashboard/noti-mark-seen/", { noti_id: notiId });
        console.log(response.data);
        fetchDashboardData();
        Toast("success", "Notification Seen", "");
    };

    return (
        <>
            <Header />
            <section className="dashboard-section">
                <div className="container">
                    <div className="dashboard-grid">
                        {/* Stats Cards */}
                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-icon bg-success">
                                    <i className="bi bi-people-fill" />
                                </div>
                                <div className="stat-content">
                                    <h3>{stats.views || 0}</h3>
                                    <p>Total Views</p>
                                </div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-icon bg-primary">
                                    <i className="bi bi-file-earmark-text-fill" />
                                </div>
                                <div className="stat-content">
                                    <h3>{stats.posts || 0}</h3>
                                    <p>Posts</p>
                                </div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-icon bg-danger">
                                    <i className="bi bi-suit-heart-fill" />
                                </div>
                                <div className="stat-content">
                                    <h3>{stats.likes || 0}</h3>
                                    <p>Likes</p>
                                </div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-icon bg-info">
                                    <i className="bi bi-tag" />
                                </div>
                                <div className="stat-content">
                                    <h3>{stats.bookmarks || 0}</h3>
                                    <p>Bookmarks</p>
                                </div>
                            </div>
                        </div>

                        {/* Posts Card */}
                        <div className="dashboard-card">
                            <div className="card-header">
                                <h3>All Posts ({stats.posts || 0})</h3>
                                <i className="bi bi-grid-fill text-danger" />
                            </div>
                            <div className="card-body">
                                {posts?.map((p, index) => (
                                    <div className="post-item" key={index}>
                                        <img src={p.image} alt="post thumbnail" />
                                        <div className="post-content">
                                            <h4>{p.title}</h4>
                                            <div className="post-meta">
                                                <span><i className="fas fa-calendar"></i> {moment(p.date).format("DD MMM, YYYY")}</span>
                                                <span><i className="fas fa-eye"></i> {p.view} Views</span>
                                                <span><i className="fas fa-thumbs-up"></i> {p.likes?.length} Likes</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="card-footer">
                                <Link to="/posts/" className="view-all">
                                    View all Posts <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>

                        {/* Comments Card */}
                        <div className="dashboard-card">
                            <div className="card-header">
                                <h3>Comments ({comments?.length || 0})</h3>
                                <i className="bi bi-chat-left-quote-fill text-success" />
                            </div>
                            <div className="card-body">
                                {comments?.slice(0, 3).map((c, index) => (
                                    <div className="comment-item" key={index}>
                                        <img src="https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg" alt="avatar" />
                                        <div className="comment-content">
                                            <p>{c.comment}</p>
                                            <div className="comment-meta">
                                                <span>by {c.name}</span>
                                                <span>{moment(c.date).format("DD MMM, YYYY")}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="card-footer">
                                <Link to="/comments/" className="view-all">
                                    View all Comments <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>

                        {/* Notifications Card */}
                        <div className="dashboard-card">
                            <div className="card-header">
                                <h3>Notifications</h3>
                                <i className="fas fa-bell text-warning" />
                            </div>
                            <div className="card-body">
                                {noti?.slice(0, 3)?.map((n, index) => (
                                    <div className="notification-item" key={index}>
                                        <div className={`notification-icon ${n.type}`}>
                                            {n.type === "Like" && <i className="fas fa-thumbs-up" />}
                                            {n.type === "Comment" && <i className="bi bi-chat-left-quote-fill" />}
                                            {n.type === "Bookmark" && <i className="fas fa-bookmark" />}
                                        </div>
                                        <div className="notification-content">
                                            <h4>{n.type}</h4>
                                            <p>
                                                {n.type === "Like" && <>Someone liked your post <b>{n.post?.title?.slice(0, 30) + "..."}</b></>}
                                                {n.type === "Comment" && <>You have a new comment on <b>{n.post?.title?.slice(0, 30) + "..."}</b></>}
                                                {n.type === "Bookmark" && <>Someone bookmarked your post <b>{n.post?.title?.slice(0, 30) + "..."}</b></>}
                                            </p>
                                            <div className="notification-actions">
                                                <span>5 min ago</span>
                                                <button onClick={() => handleMarkNotiAsSeen(n.id)} className="mark-seen">
                                                    <i className="fas fa-check-circle"></i> Mark as seen
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="card-footer">
                                <Link to="/notifications/" className="view-all">
                                    View all Notifications <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>

                        {/* Posts Table */}
                        <div className="full-width-card">
                            <div className="card-header">
                                <div className="header-content">
                                    <h3>All Blog Posts <span className="badge">{posts?.length || 0}</span></h3>
                                    <Link to="/add-post/" className="add-new">
                                        Add New <i className="fas fa-plus"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="table-container">
                                <table className="glass-table">
                                    <thead>
                                        <tr>
                                            <th>Article Name</th>
                                            <th>Views</th>
                                            <th>Published Date</th>
                                            <th>Category</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {posts?.map((p, index) => (
                                            <tr key={index}>
                                                <td>{p?.title}</td>
                                                <td>{p.view}</td>
                                                <td>{moment(p.date).format("DD MMM, YYYY")}</td>
                                                <td>{p.category?.title}</td>
                                                <td><span className={`status-badge ${p.status}`}>{p.status}</span></td>
                                                <td>
                                                    <div className="action-buttons">
                                                        <button className="delete">
                                                            <i className="bi bi-trash" />
                                                        </button>
                                                        <button className="edit">
                                                            <i className="bi bi-pencil-square" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

            <style jsx>{`
                .dashboard-section {
                    padding: 2rem 0;
                    background: rgba(15, 23, 42, 0.5);
                    min-height: calc(100vh - 120px);
                }
                
                .container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }
                
                .dashboard-grid {
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 1.5rem;
                }
                
                .stats-grid {
                    grid-column: span 12;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                
                .stat-card {
                    background: rgba(15, 23, 42, 0.7);
                    backdrop-filter: blur(10px);
                    border-radius: 12px;
                    padding: 1.5rem;
                    display: flex;
                    align-items: center;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.3s ease;
                }
                
                .stat-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                }
                
                .stat-icon {
                    width: 60px;
                    height: 60px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 1.5rem;
                    background: rgba(99, 102, 241, 0.1);
                }
                
                .stat-icon.bg-success {
                    color: #10b981;
                    background: rgba(16, 185, 129, 0.1);
                }
                
                .stat-icon.bg-primary {
                    color: #6366f1;
                    background: rgba(99, 102, 241, 0.1);
                }
                
                .stat-icon.bg-danger {
                    color: #ef4444;
                    background: rgba(239, 68, 68, 0.1);
                }
                
                .stat-icon.bg-info {
                    color: #06b6d4;
                    background: rgba(6, 182, 212, 0.1);
                }
                
                .stat-icon i {
                    font-size: 1.5rem;
                }
                
                .stat-content h3 {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: white;
                    margin-bottom: 0.25rem;
                }
                
                .stat-content p {
                    color: rgba(255, 255, 255, 0.7);
                    margin-bottom: 0;
                }
                
                .dashboard-card {
                    grid-column: span 12;
                    background: rgba(15, 23, 42, 0.7);
                    backdrop-filter: blur(10px);
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    overflow: hidden;
                    margin-bottom: 1.5rem;
                }
                
                @media (min-width: 992px) {
                    .dashboard-card {
                        grid-column: span 4;
                    }
                }
                
                .card-header {
                    padding: 1.25rem 1.5rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .card-header h3 {
                    color: white;
                    margin: 0;
                    font-size: 1.25rem;
                }
                
                .card-header i {
                    font-size: 1.25rem;
                }
                
                .card-body {
                    padding: 1.5rem;
                }
                
                .post-item {
                    display: flex;
                    margin-bottom: 1rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }
                
                .post-item:last-child {
                    margin-bottom: 0;
                    padding-bottom: 0;
                    border-bottom: none;
                }
                
                .post-item img {
                    width: 80px;
                    height: 80px;
                    object-fit: cover;
                    border-radius: 8px;
                    margin-right: 1rem;
                }
                
                .post-content h4 {
                    color: white;
                    font-size: 1rem;
                    margin-bottom: 0.5rem;
                }
                
                .post-meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .post-meta span {
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 0.8rem;
                    display: flex;
                    align-items: center;
                }
                
                .post-meta i {
                    margin-right: 0.25rem;
                    font-size: 0.8rem;
                }
                
                .comment-item {
                    display: flex;
                    margin-bottom: 1rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }
                
                .comment-item:last-child {
                    margin-bottom: 0;
                    padding-bottom: 0;
                    border-bottom: none;
                }
                
                .comment-item img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    object-fit: cover;
                    margin-right: 1rem;
                }
                
                .comment-content p {
                    color: rgba(255, 255, 255, 0.8);
                    margin-bottom: 0.5rem;
                    font-size: 0.9rem;
                }
                
                .comment-meta {
                    display: flex;
                    gap: 1rem;
                }
                
                .comment-meta span {
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 0.8rem;
                }
                
                .notification-item {
                    display: flex;
                    margin-bottom: 1rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }
                
                .notification-item:last-child {
                    margin-bottom: 0;
                    padding-bottom: 0;
                    border-bottom: none;
                }
                
                .notification-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 1rem;
                    background: rgba(99, 102, 241, 0.1);
                }
                
                .notification-icon.Like {
                    color: #6366f1;
                    background: rgba(99, 102, 241, 0.1);
                }
                
                .notification-icon.Comment {
                    color: #10b981;
                    background: rgba(16, 185, 129, 0.1);
                }
                
                .notification-icon.Bookmark {
                    color: #ef4444;
                    background: rgba(239, 68, 68, 0.1);
                }
                
                .notification-content {
                    flex: 1;
                }
                
                .notification-content h4 {
                    color: white;
                    font-size: 1rem;
                    margin-bottom: 0.25rem;
                }
                
                .notification-content p {
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.85rem;
                    margin-bottom: 0.5rem;
                }
                
                .notification-content p b {
                    color: white;
                    font-weight: 500;
                }
                
                .notification-actions {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .notification-actions span {
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.75rem;
                }
                
                .mark-seen {
                    background: transparent;
                    border: none;
                    color: #6366f1;
                    font-size: 0.75rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                }
                
                .mark-seen i {
                    margin-right: 0.25rem;
                }
                
                .card-footer {
                    padding: 1rem 1.5rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    text-align: center;
                }
                
                .view-all {
                    color: #6366f1;
                    text-decoration: none;
                    font-weight: 500;
                    display: inline-flex;
                    align-items: center;
                }
                
                .view-all i {
                    margin-left: 0.5rem;
                    font-size: 0.8rem;
                }
                
                .full-width-card {
                    grid-column: span 12;
                    background: rgba(15, 23, 42, 0.7);
                    backdrop-filter: blur(10px);
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    overflow: hidden;
                    margin-bottom: 1.5rem;
                }
                
                .header-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                }
                
                .header-content h3 {
                    color: white;
                    margin: 0;
                    font-size: 1.25rem;
                    display: flex;
                    align-items: center;
                }
                
                .header-content .badge {
                    background: rgba(99, 102, 241, 0.2);
                    color: #6366f1;
                    font-size: 0.75rem;
                    padding: 0.25rem 0.5rem;
                    border-radius: 50px;
                    margin-left: 0.5rem;
                }
                
                .add-new {
                    background: linear-gradient(90deg, #6366f1, #8b5cf6);
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 8px;
                    font-size: 0.85rem;
                    font-weight: 500;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    transition: all 0.3s;
                }
                
                .add-new i {
                    margin-left: 0.5rem;
                    font-size: 0.8rem;
                }
                
                .add-new:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
                }
                
                .table-container {
                    padding: 1.5rem;
                    overflow-x: auto;
                }
                
                .glass-table {
                    width: 100%;
                    border-collapse: separate;
                    border-spacing: 0;
                }
                
                .glass-table thead th {
                    background: rgba(99, 102, 241, 0.2);
                    color: white;
                    padding: 1rem;
                    text-align: left;
                    font-weight: 500;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .glass-table tbody tr {
                    transition: all 0.2s;
                }
                
                .glass-table tbody tr:hover {
                    background: rgba(255, 255, 255, 0.05);
                }
                
                .glass-table td {
                    padding: 1rem;
                    color: rgba(255, 255, 255, 0.8);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }
                
                .status-badge {
                    display: inline-block;
                    padding: 0.25rem 0.5rem;
                    border-radius: 50px;
                    font-size: 0.75rem;
                    font-weight: 500;
                }
                
                .status-badge.Published {
                    background: rgba(16, 185, 129, 0.1);
                    color: #10b981;
                }
                
                .status-badge.Draft {
                    background: rgba(234, 179, 8, 0.1);
                    color: #eab308;
                }
                
                .status-badge.Pending {
                    background: rgba(249, 115, 22, 0.1);
                    color: #f97316;
                }
                
                .action-buttons {
                    display: flex;
                    gap: 0.5rem;
                }
                
                .action-buttons button {
                    width: 30px;
                    height: 30px;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                
                .action-buttons button:hover {
                    transform: translateY(-2px);
                }
                
                .action-buttons .delete {
                    background: rgba(239, 68, 68, 0.1);
                    color: #ef4444;
                }
                
                .action-buttons .edit {
                    background: rgba(99, 102, 241, 0.1);
                    color: #6366f1;
                }
                
                @media (max-width: 768px) {
                    .dashboard-grid {
                        display: flex;
                        flex-direction: column;
                    }
                    
                    .stats-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                    
                    .post-item, .comment-item, .notification-item {
                        flex-direction: column;
                    }
                    
                    .post-item img {
                        width: 100%;
                        height: auto;
                        margin-bottom: 1rem;
                    }
                    
                    .comment-item img {
                        margin-bottom: 1rem;
                    }
                    
                    .notification-icon {
                        margin-bottom: 1rem;
                    }
                    
                    .header-content {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 1rem;
                    }
                    
                    .add-new {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>
        </>
    );
}

export default Dashboard;