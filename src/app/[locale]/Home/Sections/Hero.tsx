import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import ServiceHeroDesc from './components/serviceHeroDesc'; 

const Hero: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div className="" >
            <div className='w-full my-5 lg:flex lg:flex-row' ref={ref}>
                <motion.div
                    initial={{ x: '-100vw', opacity: 0 }}
                    animate={{ x: inView ? 0 : '-100vw', opacity: inView ? 1 : 0 }}
                    transition={{ type: 'tween', duration: 1.2 }}
                    className='lg:flex-none lg:w-1/2 lg:pl-5 '
                >
                    <Image src={'https://dr-aqeel.com/wp-content/uploads/2024/01/dr_aqeel-1.png'} alt="Portrait" width={2400} height={1000} />
                </motion.div>

                <div className="flex flex-col gap-2 ml-8 mr-14 mt-8 ">
                    <motion.div
                        initial={{ x: '100vw', opacity: 0 }}
                        animate={{ x: inView ? 0 : '100vw', opacity: inView ? 1 : 0 }}
                        transition={{ type: 'tween', duration: 1.15 }}
                    >
                        <div className="">
                            <h1 className="text-2xl font-bold">About</h1>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: '100vw', opacity: 0 }}
                        animate={{ x: inView ? 0 : '100vw', opacity: inView ? 1 : 0 }}
                        transition={{ type: 'tween', duration: 1.18 }}
                    >
                        <h2 className="text-lg lg:text-3xl lg:font-bold lg:py-2">Dr Aqeel Farooque</h2>
                    </motion.div>
                    <motion.div
                        initial={{ x: '100vw', opacity: 0 }}
                        animate={{ x: inView ? 0 : '100vw', opacity: inView ? 1 : 0 }}
                        transition={{ type: 'tween', duration: 1.21 }}
                    >
                        <div className="lg:pr-7">
                            <p className="mr-10 text-lg lg:text-xl" style={{ color: '#2c2c74' }}>
                                Expert in children&apos;s diabetes and endocrine diseases
                            </p>
                        </div>
                        <div className="text-sm lg:text-lg gap-x-2 mr-10 mt-2 tracking-wide">
                            <p className="">
                                Dr Aqeel Farooque is a highly qualified and experienced Pediatric Endocrinologist who is passionate about helping children with endocrine-related health issues.
                            </p>
                            <p>
                                He currently serves as the head of the Diabetes & Endocrinology Unit at Al Qassimi Women&apos;s & Children&apos;s Hospital, Sharjah. This is a tertiary referral center providing care for children of the Northern Emirates, with complex endocrine-related health issues.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: '100vw', opacity: 0 }}
                        animate={{ x: inView ? 0 : '100vw', opacity: inView ? 1 : 0 }}
                        transition={{ type: 'tween', duration: 1.2}}
                    >
                        <div className="mb-8 mt-3">
                            <Link href="/en/about">
                                <button
                                    className='relative z-30 h-9 lg:h-12 w-28 lg:w-36 lg:mt-4 rounded-full text-white text-sm lg:text-lg font-semibold bg-red-800 border-white border-2 hover:bg-white hover:text-red-800 hover:border-red-800 '>
                                    Read More
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            <ServiceHeroDesc />
        </div>
    );
};

export default Hero;