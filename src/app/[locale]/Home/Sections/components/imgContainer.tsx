import React from 'react';
import { motion } from 'framer-motion';

interface ImageContainerProps {
    imageUrl: string;
    altText: string;
    title: string;
    description: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
    imageUrl,
    altText,
    title,
    description,
}) => {
    return (
        <motion.div
            className="flex items-center flex-col bg-gray-200 p-5 gap-5"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, type: 'tween'}}
        > 
            <img src={imageUrl} alt={altText} className='w-28'/>
            <h1 className="text-lg font-bold">{title}</h1>
            <p>{description}</p>
        </motion.div>
    );
};

export default ImageContainer;