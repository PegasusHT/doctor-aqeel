import React from 'react';
import BlogContainer from '../Home/Sections/components/blogContainer';
import Blogs from '../../../data/blogData.json';

const Blog: React.FC = () => {
    const blogLength = Blogs.length;
    
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-4 mt-10 lg:mt-5">Blog</h2>
            <div className='mb-8'>
                {Blogs.filter((_, index) => index % 2 === 0).map((blog, index) => (
                    <div key={index} className='flex justify-center items-center flex-col lg:flex-row lg:justify-start '>
                        <BlogContainer
                            key={index}
                            blogId={blog.blogId}
                            imageUrl={blog.imageUrl}
                            title={blog.title}
                            date={blog.date}
                            content={blog.shortDes}
                        />
                        {Blogs[index * 2 + 1] && (
                            <BlogContainer
                                key={index * 2 + 1}
                                blogId={Blogs[index * 2 + 1].blogId}
                                imageUrl={Blogs[index * 2 + 1].imageUrl}
                                title={Blogs[index * 2 + 1].title}
                                date={Blogs[index * 2 + 1].date}
                                content={Blogs[index * 2 + 1].shortDes}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
