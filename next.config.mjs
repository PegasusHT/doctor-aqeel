/** @type {import('next').NextConfig} */
const nextConfig = {};

const i18n = {
    locales: ['en-US', 'ar'],
    defaultLocale: 'en-US',
    domains: [
        {
            domain: 'example.com',
            defaultLocale: 'en-US',
        },
        {
            domain: 'example.nl',
            defaultLocale: 'ar',
        },
    ],
};

export { nextConfig, i18n };