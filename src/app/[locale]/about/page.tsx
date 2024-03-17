import React from 'react';
import data from './components/data.json';
import ImageContainer from './components/imgContainer';
import Image from 'next/image';

const About: React.FC = () => {

    return (
        <div className='mb-14' >
            <div className="relative flex items-center justify-center h-64">
                <img
                    src="https://dr-aqeel.com/wp-content/uploads/2024/01/2aa50e_bba4e57512d24fe9b9b0b57d08188974mv2.webp"
                    alt="background-title" 
                    className="absolute inset-0 w-full object-cover h-full"
                />
                <div className="relative z-10 flex flex-col justify-center items-center text-white text-lg font-bold">
                    The Full Story 
                    <h2 className='text-white text-6xl'>About</h2>
                </div>
            </div>
            {data.abtPageData.map((d, index) => (
                <ImageContainer key={index} data={d} />
            ))}
        </div>
    );
};

export default About;
             