import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

// routes اللي تحبهم public (ما يحتاجوش login)
const isPublicRoute = createRouteMatcher([
  "/",                 // الصفحة الرئيسية
  "/api/uploadthing(.*)", // مهم برشا لUploadThing
])

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|.*\\.(?:css|js|json|png|jpg|jpeg|gif|svg|webp|ico|txt|map|woff2?|ttf)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
}
