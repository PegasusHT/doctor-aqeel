import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import ServiceImage from './components/servicesImg';
import Link from 'next/link';   
import { useLocale } from 'next-intl';

const ServicesSect: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const localActive = useLocale();

    const imageData = [
        {
            imageUrl: 'https://dr-aqeel.com/wp-content/uploads/2024/01/insulin-child-teaser.jpg',
            altText: 'Image 1',
            title: 'Diabetes Management',
        },
        {
            imageUrl: 'https://dr-aqeel.com/wp-content/uploads/2024/01/Picsart_23-05-14_00-20-50-989.jpg',
            altText: 'Image 2',
            title: 'Growth Disorders',
        },
        {
            imageUrl: 'https://dr-aqeel.com/wp-content/uploads/2024/01/iStock_000018492225XSmall.jpg',
            altText: 'Image 3',
            title: 'Puberty Disorders',
        },
    ];

    return (
        <div className="bg-gray-200 flex flex-col items-center gap-20 p-8" ref={ref}>
            {imageData.map((data, index) => (
                <motion.div
                    key={index}
                    initial={{ x: '-100vw' }}
                    animate={{ x: inView ? 0 : '-100vw' }}
                    transition={{ type: 'tween', duration: 1.2 }}
                >
                    <ServiceImage data={data}/>
                </motion.div>
            ))}
            <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: inView ? 0 : '-100vw' }}
                transition={{ type: 'tween', duration: 1.2 }}
            >
                <Link href={`/${localActive}/services`}>
                    <button
                        className='relative z-30 mt-[-2rem] mb-[-4rem] h-8 w-36 rounded-full text-white font-semibold'
                        style={{ backgroundColor: '#961b1e' }}
                    >
                        See Services
                    </button>
                </Link>
            </motion.div>
        </div>
    );
};

export default ServicesSect;