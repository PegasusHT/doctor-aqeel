import React from 'react';

interface ServiceImageProps {
    data: {
        imageUrl: string;
        altText: string;
        title: string;
    };
}

const ServiceImage: React.FC<ServiceImageProps> = ({ data }) => {
    return (
        <div className="bg-neutral-100 mt-10 flex flex-col items-center h-96 w-11/12">
            <img src={data.imageUrl} alt={data.altText} className="" />
            <h2 className="text-xl mt-4">{data.title}</h2>
        </div>
    );
};

export default ServiceImage;