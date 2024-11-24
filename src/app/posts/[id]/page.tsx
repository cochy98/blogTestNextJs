"use client";

import { useParams } from "next/navigation";
import { PostDetailsParams } from "@/app/types";
import { usePostContext } from "@/app/context/PostContext";

const Post = () => {
    const { id } = useParams<PostDetailsParams>();
    const { posts } = usePostContext();

    const post = posts.find((post) => post.id === parseInt(id));

    if (!post) {
        return <div>Post non trovato.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={`Image for ${post.title}`} className="w-full h-64 object-cover" />

            <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
                <p className="text-sm text-gray-500 mt-2">Pubblicato il {new Date(post.publishDate).toLocaleDateString()}</p>
                <div className="mt-4 text-gray-700 space-y-4">
                    <p>{post.text}</p>
                </div>
            </div>
        </div>
    );
}

export default Post;