import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
        delay:0.5,
    });

    return (
        <div className="w-full h-3/5" ref={ref}>
            <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: inView ? 0 : '-100vw' }}
                transition={{ type: 'tween', duration: 1.2 }}
            >
                <img 
                    src="https://dr-aqeel.com/wp-content/uploads/2024/01/dr_aqeel-1.png"
                    alt="Portrait"
                    className="w-full h-full"
                />
            </motion.div>

            <div className="flex flex-col gap-2 ml-8 mr-14 mt-8 ">
                <motion.div
                    initial={{ x: '100vw' }}
                    animate={{ x: inView ? 0 : '100vw' }}
                    transition={{ type: 'tween', duration: 1.2 }}
                >
                    <div className="">
                        <h1 className="text-2xl font-bold">About</h1>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: '100vw' }}
                    animate={{ x: inView ? 0 : '100vw' }}
                    transition={{ type: 'tween', duration: 1.2 }}
                >
                    <div className="">
                        <h2 className="text-lg">Dr Aqeel Farooque</h2>
                    </div>
                    <div className="">
                        <p className="mr-10" style={{ color: '#2c2c74' }}>
                            Expert in children&apos;s diabetes and endocrine diseases
                        </p>
                    </div>
                    <div className="text-sm gap-x-2 mr-10 mt-2 tracking-wide">
                        <p className="">
                            Dr Aqeel Farooque is a highly qualified and experienced Pediatric Endocrinologist who is passionate about helping children with endocrine-related health issues.
                        </p>
                        <p>
                            He currently serves as the head of the Diabetes & Endocrinology Unit at Al Qassimi Women&apos;s & Children&apos;s Hospital, Sharjah. This is a tertiary referral center providing care for children of the Northern Emirates, with complex endocrine-related health issues.
                        </p>
                    </div>
                    <div className="mb-8 mt-3">
                        <Link href="/en/about">
                            <button
                                className='relative z-30 h-9 w-28 rounded-full text-white text-sm font-semibold'
                                style={{ backgroundColor: '#961b1e' }}
                            >
                                Read More
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: inView ? 0 : '100vw' }}
                transition={{ type: 'tween', duration: 1.2 }}
            >
                <div className="flex flex-col items-center justify-center mt-4">
                    <h1 className="text-2xl font-bold">Services</h1>
                    <p className='p-4 mx-10 text-sm mb-8'>
                        His clinical expertise lies in pediatric diabetes & endocrinology, and he provides consultations for a wide range of endocrine-related health problems in children, including type 1, 2, and rare types of diabetes, as well as issues related to growth, puberty, thyroid, adrenal, pituitary, sex development, calcium, and metabolic bone disorders. He also works with children who have genetic abnormalities that may cause endocrine problems.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;