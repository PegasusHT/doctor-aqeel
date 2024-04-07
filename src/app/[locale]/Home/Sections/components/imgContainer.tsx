import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {useTranslations} from 'next-intl';

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
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const t = useTranslations('HomeMethod');

    return (
        <div className='flex flex-row items-center justify-center' ref={ref}>
            {position === 'left' && <div className='lg:w-5/12' />}
            <motion.div
                className="flex items-center flex-col bg-gray-200 p-5 gap-5 lg:w-1/3 lg:mt-[-5rem] lg:mb-[-4rem] h-full"
                initial={{ x: position === 'left' ? '50vw' : '-50vw'}}
                animate={{ x: inView ? 0 : position === 'left' ? '50vw' : '-50vw'}}
                transition={{ duration: 0.8, type: 'tween'}}
            >
                <Image src={imageUrl} alt={altText} width={140} height={50}/>
                <h1 className="text-lg lg:text-3xl lg:mt-3 font-bold">{t(title)}</h1>
                <p className='lg:text-lg text-center'>{t(description)}</p>
            </motion.div>
            {position === 'right' && <div className='lg:w-5/12' />}
        </div>
    );
};

export default ImageContainer;