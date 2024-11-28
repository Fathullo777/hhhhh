import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Заменяем useHistory на useNavigate

const PostsItem = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Используем useNavigate вместо useHistory
    const [post, setPost] = useState(null);

    const getPostsById = async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await res.json();
            setPost(data);
        } catch (error) {
            console.error('Ошибка при загрузке поста:', error);
        }
    };

    useEffect(() => {
        getPostsById();
    }, [id]);

    const handleBack = () => {
        navigate(-1); // Возвращаем пользователя на предыдущую страницу
    };

    if (!post) {
        return <div className="loading">Загрузка...</div>;
    }

    return (
        <div className="post-wrapper">
            <button className="back-button" onClick={handleBack}>Назад</button>
            <div className="post-card">
                {/* Выводим все данные */}
                <h1 className="post-title">{post.title}</h1>
                <p className="post-body">{post.body}</p>
                
                <div className="post-meta">
                    <p><strong>ID:</strong> {post.id}</p>
                    <p><strong>User ID:</strong> {post.userId}</p>
                    <p><strong>Title:</strong> {post.title}</p>
                    <p><strong>Body:</strong> {post.body}</p>
                </div>
            </div>
        </div>
    );
};

export default PostsItem;
