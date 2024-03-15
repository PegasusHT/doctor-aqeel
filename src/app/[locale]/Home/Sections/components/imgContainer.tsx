import React from 'react';

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
        <div className="flex items-center flex-col bg-gray-200 p-5 gap-2">
            <img src={imageUrl} alt={altText} className='w-28'/>
            <h1 className="text-lg font-bold">{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default ImageContainer;