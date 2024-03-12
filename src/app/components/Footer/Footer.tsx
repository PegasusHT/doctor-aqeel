import React from 'react';
import Marker from './Marker';

const Footer: React.FC = () => {
    return (
        <div className="bg-violet-100 ">
            <div className="grid grid-cols-3 h-56">
                <div className="">
                    <div className="text-red-500">Contact Me</div>
                    <div className="text-lg">info@aqeel.com</div>
                    <div className="text-lg">Dubai @ Sharjah</div>
                </div>
                <div className="">Column 2</div>
                <div className="">Column 3</div>
            </div>
            <div>
                <Marker />
            </div>
        </div>
    );
};

export default Footer;