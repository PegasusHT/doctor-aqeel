import React from 'react';
import Link from 'next/link';

interface NavigationProps {
    currentBlogId: number;
    totalBlogs: number;
}

const Navigation: React.FC<NavigationProps> = ({ currentBlogId, totalBlogs }) => {
    const showPreviousPost = currentBlogId < totalBlogs;
    const showNextPost = currentBlogId > 1;

    return (
        <div className='flex flex-row mx-5 text-sm'>
            {showPreviousPost && (
                <Link href={`/blog/${currentBlogId + 1}`}>
                    <p className='text-blue-500 '>
                        <span className='mr-1'>&larr;</span> Previous Post
                    </p>
                </Link>
            )}
            <div className='flex-grow'></div>
            {showNextPost && (
                <Link href={`/blog/${currentBlogId - 1}`}>
                    <p className='text-blue-500 '>
                        Next Post <span className='ml-1'>&rarr;</span>
                    </p>
                </Link>
            )}
        </div>
    );
};

export default Navigation;