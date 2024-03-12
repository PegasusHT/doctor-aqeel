import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ar'],
 
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  // matcher: ['/', '/(ar|en)/:path*']
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};