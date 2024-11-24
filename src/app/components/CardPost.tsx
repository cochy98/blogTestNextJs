import Link from 'next/link';
import React from 'react'
import { BlogPost } from '@/app/types';

const CardPost = ({ post }: { post: BlogPost }) => {
    const { id, title, image, excerpt } = post;

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={image} alt={`Image for ${title}`} className="w-full h-48 object-cover" />
            <div className="p-6">
                <Link href={`/posts/${id}`} className="text-xl font-semibold text-blue-600 hover:underline">{title}</Link>
                <p className="text-gray-500 mt-2">{excerpt}</p>
            </div>
        </div>
    )
}

export default CardPost;
