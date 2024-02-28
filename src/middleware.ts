import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

const publicRoutes = [
  '/login',
  '/signup'
]
 
export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const isPublicPath = publicRoutes.includes(pathname);

  const token = request.cookies.get('token')?.value || '';

  if (!token && pathname === '/') {
    return;
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}
 
export const config = {
  matcher: [
    '/',
    '/dashboard',
    '/login',
    '/signup'
  ]
}