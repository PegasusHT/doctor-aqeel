import React from 'react';
import QuestionContainer from './components/questionComp';
import FaqData  from '../../../data/faqsData.json';
import Image from 'next/image'; 

const FAQs: React.FC = () => {

    return (
        <div className='mb-14 mt-5' >
            <div className="relative flex items-center justify-center h-64 lg:h-[16rem] ">
                <div className="absolute inset-0 overflow-hidden">
                    <div className='bg-left w-full h-full'
                        style={{backgroundImage: `url(https://dr-aqeel.com/wp-content/uploads/2024/01/11062b_8cbf24edcb1143f48bf9dd23c7cf72edmv2.webp)`}}>
                    </div>
                </div>
                <div className="relative z-10 flex flex-col justify-center items-center text-white text-lg lg:text-2xl font-bold">
                    <h2 className='text-7xl' >FAQs</h2>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <h1 className='text-2xl lg:text-4xl lg:mt-8 font-bold'> Frequently asked questions </h1>
            </div>

            <p className='ml-3 mt-10 text-lg lg:text-xl font-semibold mb-2'> FAQs </p>

            {
                FaqData.map((faq, index) => (
                    <QuestionContainer
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        link={faq.link}
                    />
                ))
            }
        </div>
    );
};

export default FAQs;
             