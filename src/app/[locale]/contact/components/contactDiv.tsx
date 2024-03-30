import LinkList from '@/src/app/components/Navbar/LinksList';
import React from 'react';
import MessageForm from './messageForm';

const ContactDiv: React.FC = () => {
    return (
        <div className=" flex flex-col gap-6 pt-8">
            <div className='flex flex-col gap-3 items-center justify-center mb-12'>
                <h1 className='font-semibold text-2xl'>
                    Address
                </h1>
                <p className='text-xl' style={{color:'#961B1E'}}>
                    Dubai
                </p> 
                <p className='text-xl mb-4' style={{color:'#961B1E'}}>
                    Sharjah
                </p>

                <h1 className='font-semibold text-2xl mt-6'>
                    Contact Me
                </h1>
                <p className='text-xl pb-2' style={{color:'#961B1E'}}>
                    info@dr-aqeel.com
                </p> 

                <LinkList position='contact' />
            </div>
     
            <div className='ml-4 flex flex-col gap-3'>
                <h1 className='text-lg font-semibold'>Opening Hours</h1>
                <table className='text-lg' style={{color:'#961B1E'}}>
                    <tr>
                        <td>Mon-Thu: </td>
                        <td> 8:00am - 3:00pm </td>
                    </tr>
                    <tr>
                        <td>Friday: </td>
                        <td> 8:00am - 12:00pm </td>
                    </tr>
                </table>
    
                <div className='flex flex-col gap-1 text-center '>
                    <h2 className='text-base flex justify-center'>for appointments, call EHS Hotline 800-88-77 or follow link:</h2>
                    <a className='text-sm underline cursor-pointer' style={{color:'#961B1E'}}
                    href="https://www.ehs.gov.ae/en/services/services-directory/scheduling-a-medical-appointment">
                        https://www.ehs.gov.ae/en/services/services-directory/scheduling-a-medical-appointment
                    </a>
                </div>
    
                <MessageForm />
            </div>
   
        </div>
    );
};

export default ContactDiv;