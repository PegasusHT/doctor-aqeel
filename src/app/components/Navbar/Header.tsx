import React from 'react';
import Headline from './Headline';
import Nav from './Nav';
import {useTranslations} from 'next-intl';

const tNav = useTranslations('Nav');
const tHeadline = useTranslations('Headline');

const sections = [tNav('Home'), tNav('About'), tNav('Services'), tNav('Reviews'), tNav('Blog'), tNav('FAQs'), tNav('Contact')];

const Header: React.FC = () => {
    return (
        <div className="grid grid-rows-2 lg:w-4/5 mx-auto">
            <div className="flex justify-center ">
                <Headline title={tHeadline('title')} />
            </div>
            <div className="w-full">
                <Nav sections={sections} />
            </div>
        </div>
    );
}

export default Header;
