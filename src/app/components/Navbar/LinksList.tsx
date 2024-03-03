
import React from 'react';

interface LinkListProps {
    links: {
        name: string;
        url: string;
        icon: JSX.Element;
    }[];
}

const LinkList: React.FC<LinkListProps> = ({ links }) => (
        <ul className="hidden md:flex mr-16">
            {links.map((link, index) => (
                <li key={index} className="pl-5">
                    <a href={link.url}>
                        <span className="text-xl text-red-500">{link.icon}</span>
                    </a>
                </li>
            ))}
        </ul>
    );

export default LinkList;