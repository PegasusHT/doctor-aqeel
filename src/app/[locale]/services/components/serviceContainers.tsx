'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ServiceContainerProps {
    imageUrl: string;
    altText: string;
    title: string;
    desc: string;
}

const ServiceContainer: React.FC<ServiceContainerProps> = ({
    imageUrl,
    altText,
    title,
    desc,
}) => {
    return (
        <motion.div
            className="flex items-center flex-col px-10 p-5"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, type: 'tween'}}
        > 
            <Image src={imageUrl} alt={altText} width={400} height={300} />
            <h1 className="text-lg font-bold mt-5">{title}</h1>
            <p className='mb-7'>{desc}</p>
        </motion.div>
    );
};

export default ServiceContainer;