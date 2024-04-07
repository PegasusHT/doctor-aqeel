import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import ConductedThrough from './ConductedThrough';

interface ConductedThroughDivProps {
    data: {
        ConductedThrough: {
            imgUrl: string;
            alt: string;
            title: string;
            desc: string;
        }[];
    };
}

const ConductedThroughDiv: React.FC<ConductedThroughDivProps> = ({ data }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div className='flex flex-col items-center justify-center mt-12 lg:mt-2 ml-1 gap-3 h-30 mb-14' ref={ref}>
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
                transition={{ type: 'tween', duration: 0.8 }}
                className='text-2xl lg:text-4xl font-bold text-center lg:mt-12'>
                This is conducted through:
            </motion.h1>
            <motion.div
                initial={{ y: '40vh', opacity: 0 }}
                animate={{ y: inView ? 0 : '40vh', opacity: inView ? 1 : 0 }}
                transition={{ type: 'tween', duration: 0.8, delay: 0.2 }}
                className='flex flex-col lg:flex-row items-center '>
                {data.ConductedThrough.map((container: { imgUrl: string; alt: string; title: string; desc: string }, index: number) => (
                    <ConductedThrough
                        id={index} key={index}
                        imageUrl={container.imgUrl}
                        altText={container.alt}
                        title={container.title}
                        desc={container.desc}
                    />
                ))}
            </motion.div>
        </div>
    );
}

export default ConductedThroughDiv;