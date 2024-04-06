'use client';
import { useState } from 'react';

const MessageForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // // Send email logic here
        // const response = await fetch('/api/send-email', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         name,
        //         email,
        //         message,
        //     }),
        // });

        // if (response.ok) {
        //     // Email sent successfully
        //     alert('Email sent!');
        // } else {
        //     // Error sending email
        //     alert('Failed to send email. Please try again later.');
        // }

        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
        setIsSubmitted(true);

    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mr-5 lg:ml-10 mt-8 text-sm">
            <div className="mb-4">
                <label htmlFor="name" className="">
                    Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className=" ">
                    Your Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="">
                    Your Message (optional)
                </label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 border h-48 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
            </div>
            <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
                Submit
            </button>

            {isSubmitted && (
                <div className="mt-6 text-sm mx-2 text-center border rounded-md py-1 border-green-400">
                    Thank you for your message. It has been sent.
                </div>
            )}
        </form>
    );
};

export default MessageForm;