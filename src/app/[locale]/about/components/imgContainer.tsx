'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'; 
import {useTranslations} from 'next-intl';

interface ImageContainerProps {
    data: {
        imageSrc: string;
        altText: string;
        heading: string;
        content: string[];
    },
    isRight?: boolean;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ data, isRight}) => {
    
    return (
        <div className=''>
            <div className='lg:flex flex-row hidden w-screen mt-12'>
                {isRight? 
                    <TextParent data={data} isRight={isRight} /> 
                    :
                    <ImageParent data={data} isRight={isRight} /> 
                }
                {isRight ? 
                    <ImageParent data={data} isRight={isRight} /> 
                    :
                    <TextParent data={data} isRight={isRight} /> 
                }
            </div>
            <div className='lg:hidden'>
                <ImageParent data={data} isRight={isRight} />
                <TextParent data={data} isRight={isRight} />
            </div>
        </div>
      
    );

};

export default ImageContainer;

const ImageParent: React.FC<ImageContainerProps> = ({ data, isRight }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div className='lg:w-1/2 lg:h-full lg:px-4' ref={ref}>
            <motion.div
                initial={{ x: isRight? '50vw' : '-50vw' }}
                animate={{ x: inView ? 0 : isRight? '50vw' : '-50vw' }}
                transition={{ duration: 1, type: 'tween' }}
            >
                <Image 
                    src={data.imageSrc}
                    alt={data.altText}
                    width={1000} height={800}
                    className='flex items-center justify-center mt-16 px-5 lg:mt-8 lg:px-0'
                />
            </motion.div>
        </div>
    );
};

const TextParent: React.FC<ImageContainerProps> = ({ data, isRight }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });  
    const t = useTranslations('About');

    return(
        <div className='flex flex-col gap-2 ml-8 mr-14 mt-8 lg:mx-6 lg:w-1/2' ref={ref}>
            <motion.div
                initial={{ x: isRight? '-50vw' : '50vw' }}
                animate={{ x: inView ? 0 : isRight? '-50vw' : '50vw' }}
                transition={{ duration: 0.7, type: 'tween'}}
            >
                <h1 className='text-2xl lg:text-3xl lg:mx-10 font-bold'>{t(data.heading)}</h1>
            </motion.div>

            <motion.div
                initial={{ x: isRight? '-50vw' : '50vw' }}
                animate={{ x: inView ? 0 : isRight? '-50vw' : '50vw' }}
                transition={{ duration: 1, type: 'tween'}}
            >
                <div className='text-sm lg:text-base gap-x-2 mr-10 lg:mx-10 mt-2 tracking-wider'>
                    {data.content.map((paragraph, index) => (
                        <p className='mb-4' key={index}>{t(paragraph)}</p>
                    ))}
                </div>
            </motion.div>
    
        </div>
    )
};
