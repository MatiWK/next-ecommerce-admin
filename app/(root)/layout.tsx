"use client"
import Nav from "@/components/navbar"
import { signIn, signOut, useSession } from "next-auth/react"
// import { SignIn, UserButton, currentUser, useSession } from "@clerk/nextjs";

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
  // const session = useSession();
  const { data: session } = useSession()

  

  if(!session) {
    return (
      <div className="h-screen flex items-center bg-black">
        <div className="w-full text-center">
          <button  
          onClick={() => signIn('google')}
          className=" rounded-full px-5 py-3 bg-white font-semibold">Sign in with Google</button>
        </div>
      </div>
    )
  }
  return (
    <> 
    <div className="bg-black min-h-screen text-white flex ">
      <Nav />
      <div className="bg-white text-black flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
        {children }
      </div>
    </div>
  </>
  )
}
