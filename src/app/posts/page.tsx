"use client";

import React from 'react';
import { usePostContext } from '@/app/context/PostContext';
import Loader from '../components/Loader';
import CardPost from '../components/CardPost';

const Posts = () => {
    const { loading, posts } = usePostContext();

    if (loading) return <Loader />;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <CardPost {...{ post }} key={post.id} />
            ))}
        </div>
    );
};

export default Posts;