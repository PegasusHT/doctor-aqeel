import React from 'react';
import data from '../../../data/aboutPageData.json';
import ImageContainer from './components/imgContainer';
import Image from 'next/image';

const About: React.FC = () => {

    return (
        <div className='mb-14' >
            <div className="relative flex items-center justify-center h-64 lg:h-80">
                <Image
                    src="https://dr-aqeel.com/wp-content/uploads/2024/01/2aa50e_bba4e57512d24fe9b9b0b57d08188974mv2.webp"
                    alt="background-title" 
                    width={1920} height={1080}
                    className="absolute inset-0 w-full object-cover h-full"
                />
                <div className="relative z-10 flex flex-col justify-center items-center text-white text-lg lg:text-2xl font-bold">
                    The Full Story 
                    <h2 className='text-white text-6xl lg:text-8xl '>About</h2>
                </div>
            </div>
            {data.abtPageData.map((d, index) => {
                const isRight = index % 2 !== 0;
                return <ImageContainer key={index} data={d} isRight={isRight} />;
            })}
        </div>
    );
};

export default About;
             