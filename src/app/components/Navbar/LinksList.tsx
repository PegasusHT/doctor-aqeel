
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const links = [
    'https://www.linkedin.com/in/aqeel-farooque-64158921/',
    'https://www.tiktok.com/@dr.aqeelfarooque?_t=8c0ixA2Z4Yp&_r=1',
    'https://twitter.com/AqeelFarooque?t=OV9ZNVjFkpu5KU3ro7ov2g&s=08',
    'https://www.instagram.com/dr.aqeel_farooque/',
    'https://www.youtube.com/@DrAqeelFarooque',
];

const socialLinks = [
    { name: 'LinkedIn', url: links[0], icon: <FaLinkedin /> },
    { name: 'GitHub', url: links[1], icon: <FaGithub /> },
    { name: 'Twitter', url: links[2], icon: <FaTwitter /> },
    { name: 'Instagram', url: links[3], icon: <FaInstagram /> },
    { name: 'Youtube', url: links[4], icon: <FaYoutube /> },
];


const LinkList: React.FC= ( ) => (
        <ul className="hidden md:flex ">
            {socialLinks.map((link, index) => (
                <li key={index} className="pr-5">
                    <a href={link.url}>
                        <span className="text-xl text-red-500">     
                            {link.icon}
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    );

export default LinkList;