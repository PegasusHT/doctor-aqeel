import React from 'react';
import ImageContainer from './components/imgContainer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const imageData = [
    {
        imageUrl: 'https://dr-aqeel.com/wp-content/uploads/2024/01/a7f350_f3639d34dc8d4eafbd86e800ba871e0emv2.png',
        altText: 'Picture 1',
        title: 'Consultations',
        description: "Dr Aqeel will review the child's medical history, perform a physical exam, and order any necessary lab tests or imaging studies."
    },
    {
        imageUrl: 'https://dr-aqeel.com/wp-content/uploads/2024/01/a7f350_f5b282c756e4499195abd5019669619amv2.png',
        altText: 'Picture 2',
        title: 'Testing',
        description: 'These tests may include blood tests, imaging studies (such as X-rays, Ultrasound, MRI, etc.), and hormone stimulation tests.'
    },
    {
        imageUrl: 'https://dr-aqeel.com/wp-content/uploads/2024/01/a7f350_cc6ffef0eef6407d853d75ff2414fb33mv2.png',
        altText: 'Picture 3',
        title: 'Treatment',
        description: 'Once a diagnosis has been made, Dr Aqeel will work with the child and their family to develop a treatment plan. Treatment may include medications, hormone replacement therapy, lifestyle changes, or surgery in some cases.'
    },
    {
        imageUrl: 'https://dr-aqeel.com/wp-content/uploads/2024/01/a7f350_767221498ff34915b92478bc496310a6mv2.png',
        altText: 'Picture 4',
        title: 'Holistic Support',
        description: 'He makes an extra effort to provide tailored treatment plans to meet the unique needs of each child.'
    }
];

const Method: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
        delay: 0.5,
    });

    return (
        <div className="flex flex-col mt-32 items-center gap-2" ref={ref}>
            <h2 className="text-xl font-semibold">Methodology</h2>
            <h1 className='text-2xl font-bold'>This is conducted through:</h1>
            <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: inView ? 0 : '-100vw' }}
                transition={{ duration: 1, type: 'tween' }}
            >
                <div className="flex flex-col mt-10 px-5 gap-8 mb-10">
                    {imageData.map((data, index) => (
                        <ImageContainer
                            key={index}
                            imageUrl={data.imageUrl}
                            altText={data.altText}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Method;