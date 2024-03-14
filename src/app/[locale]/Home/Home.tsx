import React from 'react';
import { useTranslations } from 'next-intl';

const Home: React.FC = () => {
    const translations = useTranslations('Home');

    return (
        <div >
           <div className="relative flex justify-center h-screen  overflow-hidden">
                <video autoPlay loop muted className="absolute w-screen h-3/5">
                    <source src={'home.mp4'} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="relative z-30 p-5 h-20 text-2xl text-white bg-purple-300 rounded-xl">
                    Welcome to my site!
                </div>
            </div>
        </div>
    );
};

export default Home; 