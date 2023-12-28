import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { link: '/', title: 'Home' },
  { link: '/about', title: 'About Us' },
  { link: '/courses', title: 'Courses' },
  { link: '/key-info', title: 'Key Information' },
  { link: '/shop', title: 'Shop' },
  { link: '/contact', title: 'Contact' },
];

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-maroon text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image src="/logo-white.png" alt="Tawhid Academy Logo" width={100} height={40} />
            </div>
            <div className="hidden md:flex ml-10 space-x-8">
              {navLinks.map((linkItem, index) => (
                <Link href={linkItem.link} key={index}
                   className="font-semibold text-black hover:text-gray-300">{linkItem.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-black inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X color='white' /> : <Menu  color='white'/>}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((linkItem, index) => (
              <Link href={linkItem.link} key={index}
                className="block py-2 px-4 font-semibold text-black hover:text-gray-3600">
                    {linkItem.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNav;
