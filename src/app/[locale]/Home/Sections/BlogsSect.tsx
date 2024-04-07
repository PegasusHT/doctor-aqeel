import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import BlogContainer from './components/blogContainer';
import { motion } from 'framer-motion';
import Blogs  from '../../../../data/blogData.json';
import Link from 'next/link';   
import { useLocale } from 'next-intl';
import {useTranslations} from 'next-intl';

const BlogSection: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const localActive = useLocale();
    const t = useTranslations('HomeBlog');

    return (
        <div className="flex flex-col items-center bg-gray-100" ref={ref}>
            <motion.div 
                initial={{ x: '100vw' }}
                animate={{ x: inView ? 0 : '100vw' }}
                transition={{ duration: 1, type: 'tween' }}
            >
                <h2 className="text-2xl lg:text-4xl font-bold mb-4 mt-10">{t('Title')}</h2>
            </motion.div>

            <motion.div 
                initial={{ x: '70vw' }}
                animate={{ x: inView ? 0 : '70vw' }}
                transition={{ duration: 1.1, type: 'tween'}}
            >
                <div className='lg:flex lg:flex-row'>
                    {Blogs.map((blog, index) => (
                        <BlogContainer
                            key={index} blogId={blog.blogId}
                            imageUrl={blog.imageUrl}
                            title={blog.title}
                            date={blog.date}
                            content={blog.shortDes}
                        />
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: inView ? 0 : '-100vw' }}
                transition={{ duration: 1.1, type: 'tween' }}
                ref={ref}
            >
                <Link href={`/${localActive}/blog`}>
                    <button
                        className="relative z-30 mt-8 mb-10 h-8 lg:h-12 lg:w-44 w-36 rounded-full text-white lg:text-xl font-semibold bg-red-800 border-white border-2 hover:bg-white hover:text-red-800 hover:border-red-800">
                        {t('Read More')}
                    </button>
                </Link>
            </motion.div>
        </div>
    );
};

export default BlogSection;
