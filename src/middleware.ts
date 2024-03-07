import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { publicRoutes } from './data/routes-handler';
 
export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const isPublicPath = publicRoutes.includes(pathname);

  const token = request.cookies.get('token')?.value || '';

  if (!token && pathname === '/') {
    return;
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isPublicPath && token) { 
    return NextResponse.redirect(new URL('/', request.url));
  }
  
}
 
export const config = {
  matcher: [
    "/login",
    "/signup",
    "/",
    "/dashboard",
    "/directory",
    "/add-new",
    "/employee-profiles",
    "/attendance-management",
    "/leave-management",
    "/job-listings",
    "/applicant-tracking",
    "/interview-scheduling",
    "/goal-setting",
    "/performance-reviews",
    "/feedback-management",
    "/training-programs",
    "/skills-assessment",
    "/certification-tracking",
    "/salary-details",
    "/payslip-generation",
    "/tax-management",
    "/employee-benefits",
    "/insurance",
    "/retirement-plans",
    "/time-logs",
    "/timesheets",
    "/overtime-management",
    "/employee-reports",
    "/attendance-reports",
    "/performance-reports",
    "/company-profile",
    "/user-management",
    "/preferences",
    "/profile"
  ]
}