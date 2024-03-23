import React from 'react';
import data from '../../../data/servicesData.json';
import ServiceContainer from './components/serviceContainers';
import ConductedThrough from './components/ConductedThrough';

const Services: React.FC = () => {

    return (
        <div className='mb-14' >
            <div className='flex flex-col items-center justify-center mt-12 ml-1 gap-3 h-30 mb-14'>
                <h1 className='text-2xl font-bold'> Clinical Services</h1>
                <p className='text-xs '>Healthy hormones, happy kids: compassionate and holistic care</p>
            </div>

            <div className='mb-6'>
                {data.Services.map((service, index) => (
                    <ServiceContainer
                        key={index}
                        imageUrl={service.imgUrl}
                        altText={service.alt}
                        title={service.title}
                        desc={service.desc}
                    />  
                ))}
            </div>
            
            <h1 className='text-2xl font-bold text-center'>This is conducted through:</h1>
            <div className='flex flex-col items-center'>
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
             