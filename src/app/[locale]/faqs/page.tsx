import React from 'react';
import QuestionContainer from './components/questionComp';
import FaqData  from '../../../data/faqsData.json';

const FAQs: React.FC = () => {

    return (
        <div className='mb-14 mt-5' >
            <div className="relative flex items-center justify-center h-64 mb-12" style={{ backgroundColor: '#b9cfd8' }}>
                <div className="relative z-10 flex flex-col justify-center items-center text-lg font-bold">
                    <h2 className='text-6xl' >FAQs</h2>
                </div>
            </div>
       
            <div className='flex items-center justify-center'>
                <h1 className='text-2xl font-bold'> Frequently asked questions </h1>
            </div>

            <p className='ml-3 mt-10 text-lg font-semibold'> FAQs </p>

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
             