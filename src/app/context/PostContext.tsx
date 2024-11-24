"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { BlogPost } from '../types';

interface PostContextValue {
    posts: BlogPost[];
    loading: boolean;
}

const PostContext = createContext<PostContextValue | undefined>(undefined);

export const PostProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    // Funzione per fare il fetch dei post
    const fetchPosts = async () => {
        try {
            // Controlla se i dati sono già nel localStorage
            const savedPosts = localStorage.getItem("posts");
            if (savedPosts) {
                setPosts(JSON.parse(savedPosts));
            } else {
                setLoading(true);
                const response = await fetch("/api/posts");
                const data: BlogPost[] = await response.json();
                setPosts(data);
                localStorage.setItem("posts", JSON.stringify(data));
            }
        } catch (error) {
            console.error("Errore durante il fetch dei post:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <PostContext.Provider value={{ posts, loading }}>
            {children}
        </PostContext.Provider>
    );
};

// Hook per utilizzare il contesto
export const usePostContext = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error("usePostContext must be used within a PostProvider");
    }
    return context;
};
