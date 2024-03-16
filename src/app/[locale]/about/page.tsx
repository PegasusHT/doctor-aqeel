'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        delay:0.5,
    });

    return (
        <div ref={ref}>
            <div className="relative flex items-center justify-center h-64 ">
                <img
                    src="https://dr-aqeel.com/wp-content/uploads/2024/01/2aa50e_bba4e57512d24fe9b9b0b57d08188974mv2.webp"
                    alt="background-title"
                    className="absolute inset-0 w-full object-cover h-full"
                />
                <div className="relative z-10 flex flex-col justify-center items-center text-white text-lg font-bold">
                    The Full Story 
                    <h2 className='text-white text-6xl'>About</h2>
                </div>
            </div>
            <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: inView ? 0 : '-100vw' }}
                transition={{ type: 'tween', duration: 1.2 }}
            >
                <div className='w-full flex items-center justify-center mt-16'>
                    <img
                        src="https://dr-aqeel.com/wp-content/uploads/2024/01/dr_aqeel-1.png"
                        alt="Portrait"
                        className="w-11/12 h-full "
                    />
                </div>
            </motion.div>
            <div className="flex flex-col gap-2 ml-8 mr-14 mt-8 ">
                <motion.div
                    initial={{ x: '100vw' }}
                    animate={{ x: inView ? 0 : '100vw' }}
                    transition={{ type: 'tween', duration: 1.2 }}
                >
                    <div className="">
                        <h1 className="text-2xl font-bold">A Bit About Your Doctor</h1>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: '100vw' }}
                    animate={{ x: inView ? 0 : '100vw' }}
                    transition={{ type: 'tween', duration: 1.2 }}
                >
                    <div className="text-sm gap-x-2 mr-10 mt-2 tracking-wide">
                        <p className="">
                        Dr Aqeel Farooque is a highly qualified and experienced Pediatric Endocrinologist who is passionate about helping children with endocrine-related health issues. He is currently the head of the Diabetes & Endocrinology Unit at Al Qassimi Women’s & Children’s Hospital, Sharjah. This is a tertiary referral center providing care for children of the Northern Emirates, with complex endocrine-related health issues.
                        </p>
                        <br/>
                        <p>
                        He also serves Adjunct Clinical Professor at the College of Medicine, University of Sharjah, and is passionate about teaching medical students. and post-graduate students in the MSc in Diabetes Management course.
                        </p>    
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: inView ? 0 : '-100vw' }}
                transition={{ type: 'tween', duration: 1.2 }}
            >
                <div className='w-full flex items-center justify-center mt-16'>
                    <img
                        src="https://dr-aqeel.com/wp-content/uploads/2024/01/a7f350_531b5cd1234642bfa07a0130774d7f5fmv2.webp"
                        alt="Portrait"
                        className="w-11/12 h-full "
                    />
                </div>
            </motion.div>
            <div className="flex flex-col gap-2 ml-8 mr-14 mt-8 ">
                <motion.div
                    initial={{ x: '100vw' }}
                    animate={{ x: inView ? 0 : '100vw' }}
                    transition={{ type: 'tween', duration: 1.2 }}
                >
                    <div className="">
                        <h1 className="text-2xl font-bold">His Journey in Medicine</h1>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: '100vw' }}
                    animate={{ x: inView ? 0 : '100vw' }}
                    transition={{ type: 'tween', duration: 1.2 }}
                >
                    <div className="text-sm gap-x-2 mr-10 mt-2 tracking-wide mb-10">
                        <p className="">
                        His journey in medicine began with an MBBS degree from Bangalore, India. Later he pursued pediatrics and pediatric endocrinology training in the United Kingdom and worked as a consultant pediatric endocrinologist in both the UK and Saudi Arabia before moving to the UAE in 2017.
                        </p>
                        <br/>
                        <p>
                        He is affiliated with several national and international pediatric endocrinology societies, including DPEC, EPEC, ASPED, BSPED and ESPE, which reflects his dedication to staying up-to-date with the latest research and advancements in the field.
                        </p>    
                        <br/>
                        <p>
                        He is fluent in three languages, including English, Arabic, and Urdu, which allows him to effectively communicate with a diverse range of patients and families from diverse backgrounds.
                        </p>    
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
             