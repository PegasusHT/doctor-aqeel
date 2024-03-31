import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import BlogContainer from './components/blogContainer';
import { motion } from 'framer-motion';
import Blogs  from '../../../../data/blogData.json';
import Link from 'next/link';   
import { useLocale } from 'next-intl';

const BlogSection: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
        delay: 0.5,
    });
    const localActive = useLocale();

    return (
        <div className="flex flex-col items-center bg-gray-100" ref={ref}>
            <h2 className="text-2xl font-bold mb-4 mt-10">Recent Blogs</h2>

            <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: inView ? 0 : '-100vw' }}
                transition={{ duration: 1, type: 'tween' }}
            >
                {Blogs.map((blog, index) => (
                    <BlogContainer
                        key={index} blogId={blog.blogId}
                        imageUrl={blog.imageUrl}
                        title={blog.title}
                        date={blog.date}
                        content={blog.shortDes}
                    />
                ))}
            </motion.div>

            <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: inView ? 0 : '-100vw' }}
                transition={{ duration: 1, type: 'tween' }}
                ref={ref}
            >
                <Link href={`/${localActive}/blog`}>
                    <button
                        className="relative z-30 mt-8 mb-10 h-8 w-36 rounded-full text-white font-semibold"
                        style={{ backgroundColor: '#961b1e' }}
                    >
                        More Blogs
                    </button>
                </Link>
            </motion.div>
        </div>
    );
};

export default BlogSection;
