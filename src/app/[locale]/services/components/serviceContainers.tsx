import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TitleDescProps {
    title: string;
    desc: string;
}

const TitleDesc: React.FC<TitleDescProps> = ({ title, desc }) => {
    return (
        <div className='text-center px-5'>
            <h1 className="text-2xl font-bold mb-3">{title}</h1>
            <p className='mb-7 text-lg'>{desc}</p>
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
    return (
        <div className='flex-none lg:w-1/2 flex items-center flex-col lg:items-start lg:flex-row p-5 lg:px-0'>
            <div className='lg:hidden text-center'>
                <Image src={imageUrl} alt={altText} width={400} height={300} />
                <div className='px-5'> 
                    <h1 className="text-lg font-bold mt-5">{title}</h1>
                    <p className='mb-7 mt-2'>{desc}</p>
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
                    className='hidden lg:block h-[23rem] w-1/2 items-start px--5'
                />
            )}
            {isRight ? (
                <Image
                    src={imageUrl}
                    alt={altText}
                    width={400}
                    height={300}
                    className='hidden lg:block h-[23rem] w-1/2 items-start px-5'
                />
            ) : (
                <div className='hidden lg:block'>
                    <TitleDesc title={title} desc={desc} />
                </div>
            )}
        </div>
    );
};

export default ServiceContainer;