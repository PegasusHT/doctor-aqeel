import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import BlogContainer from './components/blogContainer';
import { motion } from 'framer-motion';

const BlogData = [
    {
        imageUrl: 'https://dr-aqeel.com/wp-content/uploads/2024/01/a7f350_8e454e80bd874143bc34f13cff8710cdmv2.webp',
        title: 'Which Growth Hormone is best for my child’s growth?',
        date: 'January 3, 2024',
        description: 'If your pediatric endocrinologist feels that your child needs growth hormone injections to achieve optimal height, they may have already suggested a few different options of growth hormone pens or...',
    },
    {
        imageUrl: 'https://dr-aqeel.com/wp-content/uploads/2024/01/a7f350_6b664ea8ccef47af83bc875942dcf727mv2.webp',
        title: 'Which Growth Hormone is best for my child’s growth?',
        date: 'January 2, 2024',
        description: 'If your pediatric endocrinologist feels that your child needs growth hormone injections to achieve optimal height, they may have already suggested a few different options of growth hormone pens or...',
    },
    {
        imageUrl: "https://dr-aqeel.com/wp-content/uploads/2024/01/b556d72b44654edb88ef5a1e04b44327.webp",
        title: 'Which Growth Hormone is best for my child’s growth?',
        date: 'January 1, 2024',
        description: 'LIf your pediatric endocrinologist feels that your child needs growth hormone injections to achieve optimal height, they may have already suggested a few different options of growth hormone pens or...',
    },
];

const BlogSection: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
        delay: 0.5,
    });

    return (
        <div className="flex flex-col items-center bg-gray-100" ref={ref}>
            <h2 className="text-2xl font-bold mb-4 mt-10">Recent Blogs</h2>

            <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: inView ? 0 : '-100vw' }}
                transition={{ duration: 1, type: 'tween' }}
            >
                {BlogData.map((blog, index) => (
                    <BlogContainer
                        key={index}
                        imageSrc={blog.imageUrl}
                        title={blog.title}
                        date={blog.date}
                        content={blog.description}
                    />
                ))}
            </motion.div>

            <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: inView ? 0 : '-100vw' }}
                transition={{ duration: 1, type: 'tween' }}
                ref={ref}
            >
                <button
                    className="relative z-30 mt-8 mb-10 h-8 w-36 rounded-full text-white font-semibold"
                    style={{ backgroundColor: '#961b1e' }}
                >
                    More Blogs
                </button>
            </motion.div>
        </div>
    );
};

export default BlogSection;
