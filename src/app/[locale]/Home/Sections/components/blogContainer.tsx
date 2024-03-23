import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface BlogContainerProps {
    title: string;
    date: string;
    blogId: string;
    content: string;
    imageUrl: string;
}

const BlogContainer: React.FC<BlogContainerProps> = ({ title, date, content, imageUrl, blogId }) => {
    const imgVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1.2, ease: 'easeInOut' } },
    };

    return (
        <div className="bg-white rounded mb-10 gap-2 m-7 border-[1px] border-black">
            <img
                src={imageUrl}
                alt="Blog Image"
                className="w-full mb-4"
            />
            <h3 className="text-lg font-bold mb-2 px-5">{title}</h3>
            <p className="text-gray-500 mb-2 px-5">{date}</p>
            <p className="text-gray-700 mb-4 px-5">{content}</p>
            <Link href={`/blog/${blogId}`}>

                <button className="px-4 py-2 rounded-full border-black bg-gray-500 text-white mx-5 mb-5">Read More</button>
            </Link>
        </div>
    );
};

export default BlogContainer;
