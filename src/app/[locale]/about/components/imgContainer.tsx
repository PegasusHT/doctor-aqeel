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
    },
    pos: number;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ data, pos}) => {
    const imageOnRight = pos % 2 === 0;
    return (
      
        <div className='flex flex-col lg:flex-row lg:w-screen lg:mt-12'>
            {imageOnRight? 
                <ImageParent data={data} pos={pos} /> 
                :
                <TextParent data={data} pos={pos} /> 
            }
            {imageOnRight ? 
                <TextParent data={data} pos={pos} /> 
                :
                <ImageParent data={data} pos={pos} /> 
            }
        </div>
    );

};

export default ImageContainer;

const ImageParent: React.FC<ImageContainerProps> = ({ data }) => {
    return (
        <div className='lg:w-1/2 lg:h-full '>
            <Image 
                src={data.imageSrc}
                alt={data.altText}
                width={1000} height={1200}
                className='flex items-center justify-center mt-16 px-5 lg:mt-8 lg:pr-10'
            />
        </div>
    );
};

const TextParent: React.FC<ImageContainerProps> = ({ data }) => {  
    return(
        <div className='flex flex-col gap-2 ml-8 mr-14 mt-8 lg:w-1/2'>
            <div className=''>
                <h1 className='text-2xl lg:text-3xl lg:mx-10 font-bold'>{data.heading}</h1>
            </div>

            <div className='text-sm lg:text-xl gap-x-2 mr-10 lg:mx-10 mt-2 tracking-wider'>
                {data.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    )
};
