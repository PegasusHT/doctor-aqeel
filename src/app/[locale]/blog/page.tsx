import React from 'react';
import BlogContainer from '../Home/Sections/components/blogContainer';
import Blogs from '../../../data/blogData.json';

const Blog: React.FC = () => {

    return (
        <div className="flex flex-col items-center" >
            <h2 className="text-4xl font-bold mb-4 mt-10">Blog</h2>
            <div className='mb-8'>
                {Blogs.map((blog, index) => (
                    <BlogContainer
                        key={index}
                        blogId={blog.blogId}
                        imageUrl={blog.imageUrl}
                        title={blog.title}
                        date={blog.date}
                        content={blog.shortDes}
                    />
                ))}
            </div>
        </div>
    );
};

export default Blog;

