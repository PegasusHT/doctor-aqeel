'use client';
import React, { useState } from 'react';
import { FaAngleRight, FaPlus, FaMinus } from 'react-icons/fa';

interface QuestionContainerProps {
    question: string;
    answer: string;
    link: string;
}

const QuestionContainer: React.FC<QuestionContainerProps> = ({ question, answer, link }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [icon, setIcon] = useState(<FaPlus />);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
        setIcon(showAnswer ? <FaPlus /> : <FaMinus />);
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-row items-center">
                <FaAngleRight className="mr-2" />
                <h2 className="text-xl font-bold mb-2">{question}</h2>
                <FaPlus className="ml-auto cursor-pointer" onClick={toggleAnswer} />
            </div>
            {showAnswer && (
                <div className="mt-4">
                    <p>{answer}</p>
                    <a href={link} className="text-blue-500 hover:underline">
                        {link}
                    </a>
                </div>
            )}
        </div>
    );
};

export default QuestionContainer;