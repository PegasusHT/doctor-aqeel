'use client';
import { usePathname  } from 'next/navigation';
import Blogs from '../../../../data/blogData.json';
import BlogContent from '../components/blogContent';
import Navigation from '../components/navigation';

const BlogPost = () => {
    const pathname = usePathname();
    const id = pathname.split('/').pop();
    const blog = Blogs.find((blog) => blog.blogId === id);
    const totalBlogs = Blogs.length;

    return blog ? (
        <div className='mb-10'>
            <BlogContent 
                title={blog.title}
                date={blog.date}    
                author={blog.author}
                fullDesc={blog.fullDesc}
                imageUrl={blog.imageUrl}   
            />
            <Navigation currentBlogId={Number(blog.blogId)} totalBlogs={totalBlogs} />
        </div>
    ) : (
        <div>Loading...</div>
    );
};

export default BlogPost;
