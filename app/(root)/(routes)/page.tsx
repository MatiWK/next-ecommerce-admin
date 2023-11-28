"use client"

import { useSession } from 'next-auth/react'
import Image from 'next/image';
import React from 'react'

const Home = () => {
  const {data: session} = useSession(); 
  
  return (
    <div className='font-semibold text-xl flex justify-between items-center'>
      <h2>
        Hello, <b>{session?.user?.name} </b>
      </h2>
      <div className='flex gap-1 bg-gray-300 rounded-lg overflow-hidden pr-2' >
        <Image
          className=''
          src={session?.user?.image!}
          priority={false}
          alt="Landscape picture"
          width={30}
          height={30}
        />
        <span>{session?.user?.name}</span>

      </div>
    </div>
  )
}

export default Home
