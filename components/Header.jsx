import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Header() {
  const navigation = [
    { name: "HOME", href: "#home" },
    { name: "ORIGIN", href: "#origin" },
    { name: "PEDIGREE", href: "#pedigree" },
    { name: "BIBLE", href: "#bible" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full border-2 border-green-700 fixed lg:pl-16 lg:pr-16 pl-8 pr-8 pt-8">
      {/* The part of header container */}
      <nav className="border-2 border-orange-400  bg-transparent grid grid-cols-2 grid-rows-1 justify-items-stretch content-center">
        {/* The part of Navbar Logo */}
        <div className="border-2 text-white">
          <h1>Logo</h1>
        </div>

        {/* Burger button  */}
        <div className="md:hidden grid text-white border-2 justify-end content-center">
          <button type="button" onClick={() => setMobileMenuOpen(true)}>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* The part of Navbar items */}
        <div className="hidden border-2 md:grid grid-cols-4 grid-rows-1 justify-items-stretch gap-3  ">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold  text-white border-2"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navbar section */}
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel
          focus="true"
          className="fixed inset-0 z-10 overflow-y-auto bg-black px-6 py-6 md:hidden"
        >
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <h1 className="text-white">Logo</h1>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {/*  Close menu */}
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root text-center">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}

export default Header;
