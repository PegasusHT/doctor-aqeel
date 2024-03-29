import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SocialIcon } from 'react-social-icons'

interface BlogContainerProps {
    title: string;
    date: string;
    author: string;
    fullDesc: string[];
    imageUrl: string;
}

const BlogContent: React.FC<BlogContainerProps> = ({ title, date, author, fullDesc, imageUrl }) => {

    const pathname = usePathname();
    const blogUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;
    const shareUrls = [
        `https://www.facebook.com/sharer/sharer.php?href=${encodeURIComponent(blogUrl)}`,
        `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(blogUrl)}`,
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(blogUrl)}`,
        `https://api.whatsapp.com/send?text=${encodeURIComponent(blogUrl)}`,
        `https://www.instagram.com/share?url=${encodeURIComponent(blogUrl)}`
    ];

    return (
        <div className="bg-gray-100 mb-4 py-4 mx-2 px-3">
            <h3 className=" mb-2 text-3xl text-black font-semibold">{title}</h3>
            <div className='flex flex-row gap-1 text-sm' style={{color:'#046bd2'}}>
                <p className=''>
                    By {author}  
                </p>
                <p> / </p>
                <p className="">{date}</p>
            </div>
            <div className='w-full flex justify-center mt-5 mb-5'>
                <Image
                    src={imageUrl}
                    alt="Blog Image"
                    width={400} height={300}
                />
            </div>
            <div className='gap-2 '>
            {
                fullDesc.map((desc: string, index: number) => (
                    <p key={index} className="mb-4 text-sm">{desc}</p>
                ))
            }
            </div>

            <p className='text-lg mt-7 font-semibold'>Share Post</p>
            <div className='flex flex-row gap-0.5 '>
                {
                    shareUrls.map((url: string, index: number) => (
                        <a key={index} href={url} target='_blank' rel='noreferrer'>
                            <SocialIcon url={url} style={{ height: 35, width: 35 }} />
                        </a>
                    ))
                }
            </div>
        </div>
    );
};

export default BlogContent;
