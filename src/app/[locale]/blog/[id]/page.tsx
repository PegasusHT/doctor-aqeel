'use client';
import { usePathname  } from 'next/navigation';
import Blogs from '../../../../data/blogData.json';
import BlogContent from '../components/blogContent';

const BlogPost = () => {
    const pathname = usePathname();
    const id = pathname.split('/').pop();
    const blog = Blogs.find((blog) => blog.blogId === id);

    return blog ? (
        <div className=''>
            <BlogContent 
                title={blog.title}
                date={blog.date}    
                author={blog.author}
                fullDesc={blog.fullDesc}
                imageUrl={blog.imageUrl}   
            />
        </div>
    ) : (
        <div>Loading...</div>
    );
};

export default BlogPost;
