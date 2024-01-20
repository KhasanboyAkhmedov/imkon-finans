import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'ru', 'uz', 'uzk'],
    defaultLocale: 'en',
})

export const config = {
    matcher: ['/((?!_next).*)', '/((?!_next|_vercel|.*\\..*).*)'],
}

