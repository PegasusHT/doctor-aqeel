import React from 'react';
import { motion } from 'framer-motion';

interface BlogContainerProps {
    title: string;
    date: string;
    content: string;
    imageSrc: string;
}

const BlogContainer: React.FC<BlogContainerProps> = ({ title, date, content, imageSrc }) => {
    const containerVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1.2, ease: 'easeInOut' } },
    };

    return (
        <motion.div
            className="bg-white rounded-lg mb-4 p-5 gap-2 m-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.img
                src={imageSrc}
                alt="Blog Image"
                className="w-full mb-4"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-gray-500 mb-2">{date}</p>
            <p className="text-gray-700 mb-4">{content}</p>
            <button className="px-4 py-2 rounded-full border-black bg-gray-500 text-white">Read More</button>
        </motion.div>
    );
};

export default BlogContainer;