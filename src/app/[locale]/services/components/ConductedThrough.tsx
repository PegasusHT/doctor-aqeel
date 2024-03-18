'use client'
import React from 'react';
import Image from 'next/image';

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
    const bgClass = bgColor[id % 2]; // Calculate the index based on key % 2
    return (
        <div className={`mt-10 pt-5 flex flex-col items-center just h-[21rem] w-11/12 ${bgClass}`}> 
            <Image src={imageUrl} alt={altText} width={150} height={140} />
            <h1 className="text-xl mt-4">{title}</h1>
            <p className='mt-1 px-5 text-sm text-center'>{desc}</p>
        </div>
    );
};

export default ConductedThrough;
