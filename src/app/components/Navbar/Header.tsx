import React from 'react';
import Headline from './Headline';
import Nav from './Nav';

interface HeaderProps {
    title: string;
    sections: string[];
}

const Header: React.FC<HeaderProps> = ({ title, sections }) => {

    return (
        <div className="lg:mb-4 ">
            <div className="flex justify-center w-full">
                <Headline title={title} />
            </div>
            <div className="">
                <Nav sections={sections} />
            </div>
        </div>
    );
}

export default Header;
