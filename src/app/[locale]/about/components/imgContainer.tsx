'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'; 

interface ImageContainerProps {
    data: {
        imageSrc: string;
        altText: string;
        heading: string;
        content: string[];
    };
}

const ImageContainer: React.FC<ImageContainerProps> = ({ data}) => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
    
    return (
        <div ref={ref}>
            <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: inView ? 0 : '-100vw' }}
                transition={{ type: 'tween', duration: 1.2 }}
            >
                <div className='w-full flex items-center justify-center mt-16'>
                    <img
                        src={data.imageSrc}
                        alt={data.altText}
                        className='w-11/12 h-full'
                    />
                </div>
            </motion.div>
            <div className='flex flex-col gap-2 ml-8 mr-14 mt-8'>
                <motion.div
                    initial={{ x: '100vw' }}
                    animate={{ x: inView ? 0 : '100vw' }}
                    transition={{ type: 'tween', duration: 1.2 }}
                >
                    <div className=''>
                        <h1 className='text-2xl font-bold'>{data.heading}</h1>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: '100vw' }}
                    animate={{ x: inView ? 0 : '100vw' }}
                    transition={{ type: 'tween', duration: 1.2 }}
                >
                    <div className='text-sm gap-x-2 mr-10 mt-2 tracking-wide'>
                        {data.content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ImageContainer;