'use client';
import React from 'react';
import data from '../../../data/servicesData.json';
import ServiceContainer from './components/serviceContainers';
import ConductedThroughDiv from './components/ConductedThroughDiv';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <div className='mb-14' ref={ref}>
            <div className='flex flex-col items-center justify-center mt-12 lg:mt-2 ml-1 gap-3 h-30 mb-14'>
                <motion.h1
                    initial={{ opacity: 0, y: '-15vh' }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : '-25vh' }}
                    transition={{ type: 'tween', duration: 0.8 }}
                    className='text-2xl lg:text-6xl font-bold lg:mb-3'
                >
                    Clinical Services
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                    transition={{ type: 'tween', duration: 0.8 }}
                >
                    <p className='text-xs lg:text-xl'>Healthy hormones, happy kids: compassionate and holistic care</p>
                </motion.p>
            </div>

            <div className='mb-6'>
                {data.Services.map((service, index, array) => {
                     if (index % 2 === 0) {
                        const nextService = array[index + 1];
                        const isRight = Math.floor(index / 2) % 2 === 0 ? false : true;
                        return (
                            <div key={index} className='flex flex-col lg:flex-row '>
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
            
            <ConductedThroughDiv data={data}/>
        </div>
    );
};

export default Services;
             