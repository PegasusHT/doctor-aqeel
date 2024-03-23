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
        <div className='flex flex-row'>
            {showPreviousPost && (
                <Link href={`/blog/${currentBlogId + 1}`}>
                    <p className='text-blue-500 underline'>Previous Post</p>
                </Link>
            )}
            <div className='flex-grow'></div>
            {showNextPost && (
                <Link href={`/blog/${currentBlogId - 1}`}>
                    <p className='text-blue-500 underline'>Next Post</p>
                </Link>
            )}
        </div>
    );
};

export default Navigation;