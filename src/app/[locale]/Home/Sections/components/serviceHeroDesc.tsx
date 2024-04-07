import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {useTranslations} from 'next-intl';

const ServiceHeroDesc: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const t = useTranslations('ServicesData');

    return (
        <div className="flex flex-col items-center justify-center mt-4" ref={ref}>
            <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: inView ? 0 : '100vw' }}
                transition={{ type: 'tween', duration: 0.7 }}
            >
                <h1 className="text-2xl lg:text-3xl font-bold">{t('title')}</h1>
            </motion.div>
            <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: inView ? 0 : '100vw' }}
                transition={{ type: 'tween', duration: 0.8, delay: 0.2 }}
            >
                <p className='p-4 mx-10 text-sm lg:text-lg mb-8 lg:text-center'>
                    {t('description')}
                </p>
            </motion.div>
        </div>
    )
}

export default ServiceHeroDesc;
