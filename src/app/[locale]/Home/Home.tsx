import React from 'react';
import { useTranslations } from 'next-intl';

const Home: React.FC = () => {
    const translations = useTranslations('Home');

    return (
        <div>
            <iframe src='https://www.youtube.com/embed/a7DS9e613oo?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fdr-aqeel.com&widgetid=1'/>

        </div>
    );
};

export default Home;