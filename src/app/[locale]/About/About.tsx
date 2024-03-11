import React from 'react';

const About: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Landing Page</h1>
            <p className="text-lg text-gray-600 mb-8">This is a simple landing page built with Tailwind CSS, Next.js, and TypeScript.</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Get Started</button>
        </div>
    );
};

export default About;