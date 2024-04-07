import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import ServiceImage from './components/servicesImg';
import Link from 'next/link';   
import { useLocale } from 'next-intl';
import {useTranslations} from 'next-intl';

const ServicesSect: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    const localActive = useLocale();
    const t = useTranslations('ServicesData');

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
        <div className='text-center'>
            <div className="bg-gray-200 flex flex-col lg:flex-row items-center lg:items-start gap-20 lg:gap-10 p-8" ref={ref}>
            {imageData.map((data, index) => {
                let initial, animate;
                switch (index) {
                    case 0: // left image
                        initial = { x: '-50vw' };
                        animate = { x: inView ? 0 : '-50vw' };
                        break;
                    case 1: // middle image
                        initial = { y: '50vw' };
                        animate = { y: inView ? 0 : '50vw' };
                        break;
                    case 2: // right image
                        initial = { x: '50vw' };
                        animate = { x: inView ? 0 : '50vw' };
                        break;
                    default:
                        break;
                }
                return (
                    <motion.div
                        key={index}
                        initial={initial}
                        animate={animate}
                        transition={{ type: 'tween', duration: 0.7 }}
                    >
                        <ServiceImage data={data}/>
                    </motion.div>
                );
            })}
             
            </div>
            <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: inView ? 0 : '-100vw' }}
                transition={{ type: 'tween', duration: 0.7 }}
            >
                <Link href={`/${localActive}/services`}>
                    <button
                        className='relative z-30 mt-1 mb-[-4rem] h-8 w-36 rounded-full text-white font-semibold bg-red-800 border-white border-2 hover:bg-white hover:text-red-800 hover:border-red-800 '>
                        {t('See Services')}
                    </button>
                </Link>
            </motion.div>
        </div>

    );
};

export default ServicesSect;