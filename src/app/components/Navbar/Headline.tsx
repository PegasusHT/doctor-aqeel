import LinkList from './LinksList';
import Image from 'next/image';

const Headline = ({ title }: { title: string }) => {

    return (
        <div className="flex text-center items-center lg:w-screen"> 
            <div className="w-full flex items-center justify-center">
                <a href="https://dr-aqeel.com/">
                    <img
                        src="https://dr-aqeel.com/wp-content/uploads/2024/01/Dr.aqeel-farooque-logo-png-01-1024x1024.png"
                        className="mt-[-50px] mb-[-60px] h-52"
                        alt="" 
                    />
                </a>
            </div>
            <div className="w-full ">
                <h2 className="leading-5 font-semibold text-2xl md:text-4xl mt-5">{title}</h2>
                <h2 className="font-normal mt-4 text-base">MBBS CCT (UK) FRCPCH (UK)</h2>
            </div>
            <div className='pl-10 lg:w-full lg:flex items-center justify-center'>
                <LinkList position='head'/>
            </div>
        </div>
    );
};

export default Headline;

