import React from 'react'
import { Camera, Home, List, Package, Settings, Store } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const inactiveLink = 'flex gap-1';
  const activeLink = inactiveLink + ' bg-white text-black font-semibold p-1 rounded-l-lg '

  const pathname = usePathname();


  return ( <>
    <aside className='p-4 pr-0 text-lg'>
        <Link href={"/"} className='flex gap-1 mb-6 mr-4'>
          <Store />
          <span>EcommerceAdmin</span>
        </Link>

        <nav className='flex flex-col gap-3'>
          <Link href={"/"} className={pathname === "/" ? activeLink : inactiveLink}>
            <Home />
            Dashboard
          </Link>
          <Link href={"/products"} className={pathname === "/products" ? activeLink : inactiveLink}>
            <Package />
            Products
          </Link>
          <Link href={"/orders"} className={pathname === "/orders" ? activeLink : inactiveLink}>
            <List />
            Orders
          </Link>
          <Link href={"/settings"} className={pathname === "/settings" ? activeLink : inactiveLink}>
            <Settings />
            Settings
          </Link>
        </nav>

    </aside>
    </>
  )
}


export default Nav
