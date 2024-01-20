import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'ru', 'uz', 'uzk'],
    defaultLocale: 'en',
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/','/((?!_next).*)', '/((?!_next|_vercel|.*\\..*).*)']
};