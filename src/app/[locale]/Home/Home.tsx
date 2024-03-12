import React from 'react';
import { useTranslations } from 'next-intl';

const Home: React.FC = () => {
    const translations = useTranslations('Home');

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">{translations('title')}</h1>
            <p className="text-lg text-gray-600 mb-8">{translations('description')}</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                {translations('getStarted')}
            </button>
        </div>
    );
};

export default Home;