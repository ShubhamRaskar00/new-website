"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button";

const navItems =[
  {
  label: 'About',
  href: '/about',
},
{
  label: 'Portfolio',
  href: '/portfolio',
},
{
  label: 'Contact',
  href: '/contact',
},
];

function NavBar() {
  
  return (
    <nav className="flex justify-between items-center py-4 bg-white sticky top-0">
      <Link href="/">
        <div className="relative h-10 w-10">
          <Image fill src="/logo.png" alt="LOGO" />
        </div>
      </Link>
      <div className="flex items-center gap-x-2 sm:gap-x-4">
        {navItems.map((list) => (
          <Link href={list.href} key={list.href}>
            <Button className="bg-transparent hover:bg-transparent text-black"> 
              {list.label}
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default NavBar