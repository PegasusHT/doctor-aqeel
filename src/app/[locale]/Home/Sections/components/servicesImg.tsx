import React from 'react';
import Image from 'next/image';

interface ServiceImageProps {
    data: {
        imageUrl: string;
        altText: string;
        title: string;
    };
}

const ServiceImage: React.FC<ServiceImageProps> = ({ data }) => {
    return (
        <div className="bg-stone-100 shadow-xl px-5 pb-10 mt-0 flex flex-col lg:mx-4 lg:px-0">
            <Image src={data.imageUrl} alt={data.altText} width={400} height={400} />
            <h2 className="text-2xl font-semibold mt-4">{data.title}</h2>
        </div>
    );
};

export default ServiceImage;