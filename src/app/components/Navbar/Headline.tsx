import LinkList from './LinksList';
import Image from 'next/image';

const Headline = ({ title }: { title: string }) => {

    return (
        <div className="flex text-center items-center lg:w-screen lg:h-48"> 
            <div className="w-full lg:w-3/12 flex items-center justify-center lg:justify-start lg:ml-8">
                <a href="https://dr-aqeel.com/">
                    <Image
                        src="https://dr-aqeel.com/wp-content/uploads/2024/01/Dr.aqeel-farooque-logo-png-01-1024x1024.png"
                        className="mt-[-50px] mb-[-60px] lg:mt-6 lg:ml-[-12px] lg:mb-0 h-52 lg:h-[21rem]"
                        width={400} height={400}
                        alt='logo'
                    />
                </a>
            </div>
            <div className="w-full lg:w-5/12 lg:ml-4 ">
                <h2 className="leading-5 font-semibold text-2xl md:text-5xl mt-5">{title}</h2>
                <h2 className="font-normal mt-4 text-base lg:text-xl ">MBBS CCT (UK) FRCPCH (UK)</h2>
            </div>
            <div className='pl-10 lg:w-3/12 lg:flex items-center justify-center'>
                <LinkList position='head'/>
            </div>
        </div>
    );
};

export default Headline;

