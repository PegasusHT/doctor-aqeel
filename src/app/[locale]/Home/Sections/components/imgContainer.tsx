import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ImageContainerProps {
    imageUrl: string;
    altText: string;
    title: string;
    description: string;
    position: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
    imageUrl,
    altText,
    title,
    description, position
}) => {
    return (
        <div className='flex flex-row items-center justify-center'>
            {position === 'left' && <div className='lg:w-5/12' />}
            <motion.div
                className="flex items-center flex-col bg-gray-200 p-5 gap-5 lg:w-1/3 lg:mt-[-5rem] lg:mb-[-4rem] h-full"
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, type: 'tween'}}
            >
                <Image src={imageUrl} alt={altText} width={140} height={50}/>
                <h1 className="text-lg lg:text-3xl lg:mt-3 font-bold">{title}</h1>
                <p className='lg:text-lg text-center'>{description}</p>
            </motion.div>
            {position === 'right' && <div className='lg:w-5/12' />}
        </div>
    );
};

export default ImageContainer;