'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import Hero from './Sections/Hero';
import ServicesSect from './Sections/ServicesSect';
import Method from './Sections/Method';
import BlogSection from './Sections/BlogsSect';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLocale } from 'next-intl';
import Link from 'next/link';

const Home: React.FC = () => {
    const translations = useTranslations('Home');
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    const localActive = useLocale();

    return (
        <div ref={ref}>
            <div className="relative flex justify-center h-[28rem] overflow-hidden text-center">
                <video autoPlay loop muted className="absolute w-screen md:h-4/5 transform min-w-full max-h-full h-full scale-150 object-cover">
                    <source src={'home.mp4'} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="relative z-30 p-5 h-20">
                    <motion.div
                        initial={{ opacity: 0, x: '-100vw' }}
                        animate={{ opacity: inView ? 1 : 0, x: 0 }}
                        transition={{ type: 'tween', duration: 1 }}
                    >
                        <h1 className='text-3xl lg:text-6xl mt-28 lg:mt-16 font-bold'>
                            <div className='flex flex-row items-center justify-center'>
                                <p className='' style={{ color: '#961b1e' }}>Holistic care </p>
                                <p className='pl-3'>for you </p>
                            </div>
                            <p>and your
                                <br />
                                hormones</p>
                        </h1>
                        <p className='lg:text-xl relative z-30 text-xs mt-6'>Exceptional care in endocrinology for children and adolescents</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: '15vh' }}
                        animate={{ opacity: inView ? 1 : 0, y: 0 }}
                        transition={{ type: 'tween' }}
                    >
                        <Link href={`/${localActive}/services`}>
                            <button className='relative z-30 mt-10 h-10 w-44 rounded-full text-white font-semibold bg-red-800 border-white border-2 hover:bg-white hover:text-red-800 hover:border-red-800 '>
                                See Services
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
            <Hero />
            <ServicesSect />
            <Method />
            <BlogSection />
        </div>
    );
};

export default Home;
