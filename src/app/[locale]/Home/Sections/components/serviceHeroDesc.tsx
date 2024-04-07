import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceHeroDesc: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    
    return (
        <div className="flex flex-col items-center justify-center mt-4" ref={ref}>
            <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: inView ? 0 : '100vw' }}
                transition={{ type: 'tween', duration: 1.2 }}
            >
                <h1 className="text-2xl lg:text-3xl font-bold">Services</h1>
            </motion.div>
            <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: inView ? 0 : '100vw' }}
                transition={{ type: 'tween', duration: 1.2, delay: 0.2 }}
            >
                <p className='p-4 mx-10 text-sm lg:text-lg mb-8 lg:text-center'>
                    His clinical expertise lies in pediatric diabetes & endocrinology, and he provides consultations for a wide range of endocrine-related health problems in children, including type 1, 2, and rare types of diabetes, as well as issues related to growth, puberty, thyroid, adrenal, pituitary, sex development, calcium, and metabolic bone disorders. He also works with children who have genetic abnormalities that may cause endocrine problems.
                </p>
            </motion.div>
        </div>
    )
}

export default ServiceHeroDesc;
