import LinkList from '@/src/app/components/Navbar/LinksList';
import React from 'react';
import MessageForm from './messageForm';
import Map from './map';

const ContactDiv: React.FC = () => {
    return (
        <div>
            <div className=" flex flex-col lg:flex-row gap-6 pt-8 lg:pt-12">
                <div className='flex flex-col gap-3 items-center lg:items-start justify-center lg:pl-12'>
                    <h1 className='font-semibold text-2xl'>
                        Address
                    </h1>
                    <p className='text-xl' style={{color:'#961B1E'}}>
                        Dubai
                    </p> 
                    <p className='text-xl' style={{color:'#961B1E'}}>
                        Sharjah
                    </p>
                </div>
                <div className='flex flex-col gap-3 items-center justify-center lg:mx-4 lg:items-start lg:justify-start'>
                    <h1 className='font-semibold text-2xl mt-4 lg:mt-0'>
                        Contact Me
                    </h1>
                    <p className='text-xl pb-2 lg:pb-0' style={{color:'#961B1E'}}>
                        info@dr-aqeel.com
                    </p> 

                    <LinkList position='contact' />
                </div>

                <div className='flex flex-col gap-3 items-start justify-center lg:justify-start ml-4 mt-8 lg:mt-0'>
                    <h1 className='text-lg lg:text-2xl font-semibold'>Opening Hours</h1>
                    <table className='text-lg lg:text-xl' style={{color:'#961B1E'}}>
                        <tr>
                            <td className='w-[10rem]'>Mon-Thu </td>
                            <td className=''> 8:00am - 3:00pm </td>
                        </tr>
                        <tr>
                            <td>Friday </td>
                            <td> 8:00am - 12:00pm </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className='ml-4 flex flex-col gap-3 lg:mt-10'>
                <div className='flex flex-col gap-1 text-center '>
                    <h2 className='text-base flex justify-center'>for appointments, call EHS Hotline 800-88-77 or follow link:</h2>
                    <a className='text-sm underline cursor-pointer' style={{color:'#961B1E'}}
                    href="https://www.ehs.gov.ae/en/services/services-directory/scheduling-a-medical-appointment">
                        https://www.ehs.gov.ae/en/services/services-directory/scheduling-a-medical-appointment
                    </a>
                </div>
    
                <div className='flex flex-col lg:flex-row'>
                    <MessageForm />
                    <div className='flex-1 lg:mx-16'>
                        <Map />
                    </div>
                </div>
              
            </div>
        </div>
    );
};

export default ContactDiv;