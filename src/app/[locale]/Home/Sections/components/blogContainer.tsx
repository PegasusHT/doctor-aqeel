import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {useTranslations} from 'next-intl';

interface BlogContainerProps {
    title: string;
    date: string;
    blogId: string;
    content: string;
    imageUrl: string;
}

const BlogContainer: React.FC<BlogContainerProps> = ({ title, date, content, imageUrl, blogId }) => {
    const t = useTranslations('BlogData');

    return (
        <div className='p-5 lg:w-6/12 '>
            <div className="bg-white rounded mb-10 gap-2 border-[1px] border-black relative pb-16 ">
                <div className='w-full mb-4 h-full relative overflow-hidden'>
                    <Image
                        src={imageUrl}
                        alt="Blog Image" width={300} height={200}
                        className="w-full h-full inset-0 object-cover object-top hover:scale-125 duration-700"
                    />
                </div>
                
                <h3 className="text-lg font-bold mb-2 px-5">{t(title)}</h3>
                <p className="text-gray-500 mb-2 px-5">{t(date)}</p>
                <p className="text-gray-700 mb-4 px-5">{t(content)}</p>
                <Link href={`/blog/${blogId}`}>

                    <button className="px-4 py-2 rounded-full border-black bg-gray-500 text-white absolute bottom-0 mx-5 mb-5">{t('Read More')}</button>
                </Link>
            </div>
        </div>
  
    );
};

export default BlogContainer;
