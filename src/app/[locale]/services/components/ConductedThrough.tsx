import React from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

interface ConductedThroughProps {
    id: number;
    imageUrl: string;
    altText: string;
    title: string;
    desc: string;
}
const bgColor = ['bg-pink-100', 'bg-blue-100'];

const ConductedThrough: React.FC<ConductedThroughProps> = ({
    id, imageUrl, 
    altText,
    title,
    desc,
}) => {
    const bgClass = bgColor[id % 2]; 
    const t = useTranslations('ServicesData');

    return (
        <div className={`mt-10 pt-5 flex flex-col items-center h-[21rem] lg:h-[36rem] w-11/12 ${bgClass}`}> 
            <Image src={imageUrl} alt={altText} width={150} height={140} className='lg:mt-5' />
            <h1 className="text-xl lg:text-3xl lg:font-semibold mt-4 lg:mt-8 lg:mb-4">{t(title)}</h1>
            <p className='mt-1 px-5 text-sm lg:text-lg text-center'>{t(desc)}</p>
        </div>
    );
};

export default ConductedThrough;
