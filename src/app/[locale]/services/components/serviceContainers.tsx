import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {useTranslations} from 'next-intl';

interface TitleDescProps {
    title: string;
    desc: string;
}

const TitleDesc: React.FC<TitleDescProps> = ({ title, desc }) => {
    const t = useTranslations('ServicesData');

    return (
        <div className='text-center px-5'>
            <h1 className="text-2xl font-bold mb-3">{t(title)}</h1>
            <p className='mb-7 text-lg'>{t(desc)}</p>
        </div>
    );
};

interface ServiceContainerProps {
    imageUrl: string;
    altText: string;
    title: string;
    desc: string;
    isRight: boolean;
}

const ServiceContainer: React.FC<ServiceContainerProps> = ({
    imageUrl,
    altText,
    title,
    desc,
    isRight
}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const t = useTranslations('ServicesData');

    return (
        <motion.div
            initial={{ x: isRight ? '25vw' : '-25vw', opacity: 0 }}
            animate={{ x: inView ? 0 : isRight ? '25vw' : '-25vw', opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.8, type: 'tween' }}
            className='flex-none lg:w-1/2 flex items-center flex-col lg:items-start lg:flex-row p-5 lg:px-0' ref={ref}
        >
            <div className='lg:hidden text-center'>
                <Image src={imageUrl} alt={altText} width={400} height={300} />
                <div className='px-5'> 
                    <h1 className="text-lg font-bold mt-5">{t(title)}</h1>
                    <p className='mb-7 mt-2'>{t(desc)}</p>
                </div>
            </div>
            {isRight ? (
                <div className='hidden lg:block'>
                    <TitleDesc title={title} desc={desc} />
                </div>
            ) : (
                <Image
                    src={imageUrl}
                    alt={altText}
                    width={400}
                    height={300}
                    className='hidden lg:block h-[20rem] w-1/2 items-start px--5'
                />
            )}
            {isRight ? (
                <Image
                    src={imageUrl}
                    alt={altText}
                    width={400}
                    height={300}
                    className='hidden lg:block h-[20rem] w-1/2 items-start px-5'
                />
            ) : (
                <div className='hidden lg:block'>
                    <TitleDesc title={title} desc={desc} />
                </div>
            )}
        </motion.div>
    );
};

export default ServiceContainer;