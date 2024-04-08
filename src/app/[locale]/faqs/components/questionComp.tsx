'use client';
import React, { useState } from 'react';
import { FaAngleRight, FaPlus, FaMinus } from 'react-icons/fa';
import { Transition } from '@headlessui/react';
import {useTranslations} from 'next-intl';

interface QuestionContainerProps {
    question: string;
    answer: string;
    link: string;
}

const QuestionContainer: React.FC<QuestionContainerProps> = ({ question, answer, link }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [icon, setIcon] = useState(<FaPlus />);
    
    const toggleAnswer = () => {
        const prevShowAnswer = showAnswer;
        setShowAnswer(!prevShowAnswer);
        setIcon(prevShowAnswer ?  <FaPlus /> : <FaMinus />);
    };
    const t = useTranslations('FAQsPage');

    return (
        <div className="mx-4 mb-4 rounded-lg shadow-md ">
            <div className="flex flex-row items-start bg-gray-200 px-4 py-3  cursor-pointer" onClick={toggleAnswer} >
                <h2 className="font-semibold text-black text-sm lg:text-lg flex items-start"> 
                    <FaAngleRight className="mr-2 mt-1 lg:text-lg" />
                    {t(question)}
                </h2>
                <div className="ml-auto text-sm lg:text-lg mt-1" >
                  {icon}
                </div>
            
            </div>
            <Transition
                show={showAnswer}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
            >
                <div className="mt-1 p-4 pt-2 text-sm lg:text-base ">
                    <p>{t(answer)}</p>
                    <a href={link} className="text-blue-500 hover:underline">
                        {link}
                    </a>
                </div>
            </Transition>
        </div>
    );
};

export default QuestionContainer;