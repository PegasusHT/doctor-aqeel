import React from 'react';
import data from '../../../data/servicesData.json';
import ServiceContainer from './components/serviceContainers';
import ConductedThrough from './components/ConductedThrough';

const Services: React.FC = () => {

    return (
        <div className='mb-14' >
            <div className='flex flex-col items-center justify-center mt-12 lg:mt-2 ml-1 gap-3 h-30 mb-14'>
                <h1 className='text-2xl lg:text-6xl font-bold lg:mb-3'> Clinical Services</h1>
                <p className='text-xs lg:text-xl'>Healthy hormones, happy kids: compassionate and holistic care</p>
            </div>

            <div className='mb-6'>
                {data.Services.map((service, index, array) => {
                     if (index % 2 === 0) {
                        const nextService = array[index + 1];
                        const isRight = Math.floor(index / 2) % 2 === 0 ? false : true;
                        return (
                            <div key={index} className='flex justify-center items-center flex-col lg:flex-row '>
                                <ServiceContainer
                                    key={index}
                                    isRight={isRight}
                                    imageUrl={service.imgUrl}
                                    altText={service.alt}
                                    title={service.title}
                                    desc={service.desc}
                                />
                                {nextService && (
                                    <ServiceContainer
                                        key={index + 1}
                                        isRight={isRight}
                                        imageUrl={nextService.imgUrl}
                                        altText={nextService.alt}
                                        title={nextService.title}
                                        desc={nextService.desc}
                                    />
                                )}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            
            <h1 className='text-2xl lg:text-4xl font-bold text-center lg:mt-12'>This is conducted through:</h1>
            <div className='flex flex-col lg:flex-row items-center '>
                {data.ConductedThrough.map((container, index) => (
                    <ConductedThrough
                        id={index} key={index}
                        imageUrl={container.imgUrl}
                        altText={container.alt}
                        title={container.title}
                        desc={container.desc}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;
             