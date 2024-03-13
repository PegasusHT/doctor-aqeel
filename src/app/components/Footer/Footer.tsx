import React from 'react';
import Marker from './Marker';
import LinkList from '../Navbar/LinksList';

const Footer: React.FC = () => {
    return (
        <div className="bg-violet-100 pt-20">
            <div className="grid grid-cols-[auto_auto_auto] h-56 items-start ml-20">
                <div className="">
                    <div className="text-red-500 pb-4 text-2xl font-bold">Contact Me</div>
                    <div className="text-lg pb-1">info@aqeel.com</div>
                    <div className="text-lg pb-3">Dubai @ Sharjah</div>
                    <div className="">
                        <LinkList />
                    </div>
                </div>
                <div className="grid grid-rows-4 gap-y-1 pr-4">
                    <p>About</p>
                    <p>Services</p>
                    <p>FAQs</p>
                    <p>Contact</p>
                </div>
                <div className="">
                    <h1 className='text-red-500 font-semibold'>Subscribe to Get My Newsletter</h1>
                    <form className='grid col-2'>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="border border-gray-300 h-12 mr-10 mt-4 p-2"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 w-28  text-white h-10 p-2 mt-2"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <Marker />
            </div>
        </div>
    );
};

export default Footer;