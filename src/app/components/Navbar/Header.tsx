import React from 'react';
import Headline from './Headline';
import Nav from './Nav';

interface HeaderProps {
    title: string;
    sections: string[];
}

const Header: React.FC<HeaderProps> = ({ title, sections }) => {

    return (
        <div className="grid grid-rows-2 lg:w-4/5 mx-auto">
            <div className="flex justify-center ">
                <Headline title={title} />
            </div>
            <div className="w-full">
                <Nav sections={sections} />
            </div>
        </div>
    );
}

export default Header;
