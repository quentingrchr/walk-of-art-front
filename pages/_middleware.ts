// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import jwt from "jsonwebtoken"
import { UserRolesType, IUser } from "../src/types"

function hasRole(user: IUser | null, role: UserRolesType) {
  if (!user) return false
  return user.roles.indexOf(role) !== -1
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { token } = request.cookies
  console.log(token)
  let roles = [] as UserRolesType[]
  let isAuthenticated = false
  const response = NextResponse.next()
  let user = null as IUser | null

  if (token) {
    user = jwt.decode(token)
    if (user) {
      // if token is valid
      isAuthenticated = true
    }
  }

  if (request.url === "/") {
    return response
  }
  if (request.url.startsWith("/artist") && !hasRole(user, "ROLE_ARTIST")) {
    return NextResponse.redirect("/")
  }
  if (
    request.url.startsWith("/moderator") &&
    !hasRole(user, "ROLE_MODERATOR")
  ) {
    return NextResponse.redirect("/")
  }
}

// See "Matching Paths" below to learn more
export const config = {}
