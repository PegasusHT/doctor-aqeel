import React from 'react';
import Headline from './Headline';
import Nav from './Nav';
import { useTranslations } from 'next-intl';

interface HeaderProps {
    title: string;
    sections: string[];
}

const Header: React.FC<HeaderProps> = ({ title, sections }) => {
    const tNav = useTranslations('Nav');
    const tHeadline = useTranslations('Headline');

    return (
        <div className="grid grid-rows-2 lg:w-4/5 mx-auto">
            <div className="flex justify-center ">
                <Headline title={title} />
            </div>
            <div className="w-full">
                <Nav sections={sections.map(section => tNav(section))} />
            </div>
        </div>
    );
}

export default Header;
