import LinkList from './LinksList';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Headline = ({ title }: { title: string }) => {
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

    return (
        <div className="flex pd-0 text-center items-center xl:gap-20"> 
            <div className="">
                <a href="https://dr-aqeel.com/">
                    <img
                        src="https://dr-aqeel.com/wp-content/uploads/2024/01/Dr.aqeel-farooque-logo-png-01-1024x1024.png"
                        className="mt-[-50px] mb-[-60px] h-52"
                        alt=""
                    />
                </a>
            </div>
            <div className="">
                <h2 className="leading-5 font-semibold text-2xl md:text-4xl mt-5">{title}</h2>
                <h2 className="font-normal mt-4 text-base">MBBS CCT (UK) FRCPCH (UK)</h2>
            </div>
            <div className='pl-10 mr-auto'>
                <LinkList links={socialLinks} />
            </div>
        </div>
    );
};

export default Headline;

