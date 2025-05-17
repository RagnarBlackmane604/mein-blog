'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog/create', label: 'Blog erstellen' },
  { href: '/about', label: 'Über Uns' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-blue/60 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className=" max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          📝 MeinBlog
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-gray-700 hover:text-blue-600 transition ${
                  pathname === link.href ? 'font-semibold text-blue-600 underline' : ''
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Menu öffnen"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block py-2 text-gray-700 hover:text-blue-600 ${
                  pathname === link.href ? 'font-semibold text-blue-600 underline' : ''
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
