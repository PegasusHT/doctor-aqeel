
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

const LinkList: React.FC<{ position: string }> = ({ position }) => (
    <ul className={`flex gap-3 ${position === 'head' ? 'hidden md:flex' : ''}`}>
        {socialLinks.map((link, index) => (
            <li key={index} className="">
                <a href={link.url}>
                    <span className={`${position === 'head' ? 'text-xl lg:text-3xl' : 'text-2xl '}`} style={{color:'#961B1E'}}>
                        {link.icon}
                    </span>
                </a>
            </li>
        ))}
    </ul>
);

export default LinkList;