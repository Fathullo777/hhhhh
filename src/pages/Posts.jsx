import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setPosts(data);
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="posts-container">
            <h1 className="posts-title">Страница постов</h1>
            <div className="posts-grid">
                {posts.map((item) => (
                    <Link to={`/postsitem/${item.id}`} className="post-card" key={item.id}>
                        <h2 className="post-title">{item.title}</h2>
                        <p className="post-body">{item.body}</p>
                        {/* Выводим все возможные данные */}
                        <div className="post-meta">
                            <p><strong>ID:</strong> {item.id}</p>
                            <p><strong>User ID:</strong> {item.userId}</p>
                            <p><strong>Title:</strong> {item.title}</p>
                            <p><strong>Body:</strong> {item.body}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Posts;
