"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { nav } from "@/lib/nav";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
// import logo from "@/public/CroppedLogo.png";
import logo from "@/public/cropped-purple-logo.png";

type HeaderProps = {
  classname?: string;
};

const Header = ({ classname }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className={clsx("absolute w-full px-2 py-1", classname)}>
        <nav aria-label="Main-navigation">
          <ul className="flex flex-col md:m-4 md:flex-row md:items-center md:rounded-xl">
            <div className="flex items-center justify-between">
              <NameLogo />
              <button
                aria-label="Open menu"
                className="block text-2xl text-black  md:hidden"
                onClick={() => setIsOpen(true)}
              >
                <MdMenu />
              </button>
            </div>
            <div
              className={clsx(
                "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-black pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden md:bg-none",
                isOpen ? "translate-x-0" : "translate-x-[100%]",
              )}
            >
              <button
                aria-label="Close menu"
                className="fixed right-4 top-3 block p-2 text-2xl text-white md:hidden "
                onClick={() => setIsOpen(false)}
              >
                <MdClose />
              </button>
              {nav.map((e, index) => {
                return (
                  <Link
                    key={index}
                    className={clsx("text-2xl font-semibold text-white", {
                      "active-link": pathname === e.navlink,
                    })}
                    href={e.navlink}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    {e.navlabel}
                  </Link>
                );
              })}
            </div>
            <DesktopMenu />

            <SocialMediaMenu />
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

function NameLogo({}: {}) {
  return (
    <div className="">
      <Link
        href="/"
        aria-label="Home page"
        className="font-bold text-black md:text-2xl"
      >
        <div>
          <Image src={logo} alt="Company Logo" width={150} height={150} />
        </div>
      </Link>
    </div>
  );
}

function DesktopMenu() {
  const pathname = usePathname();

  return (
    <div className="ml-12 hidden gap-4 md:flex">
      {nav.map((e, index) => {
        return (
          <Link
            key={index}
            className={clsx("font-bold text-black", {
              underline: pathname === e.navlink,
            })}
            href={e.navlink}
          >
            {e.navlabel}
          </Link>
        );
      })}
    </div>
  );
}

function SocialMediaMenu() {
  return (
    <div className="ml-auto mr-8 hidden gap-4 md:flex md:items-center">
      <div className="flex items-center gap-4">
        <SocialMediaIcon icon={<FaLinkedin />} />
        <SocialMediaIcon icon={<FaSquareXTwitter />} />
        <SocialMediaIcon icon={<FaInstagram />} />
      </div>
      <button className="w-fit border-2 border-white p-2 font-semibold text-mainO text-white lg:px-4 lg:py-2">
        Join Now
      </button>
    </div>
  );
}

function SocialMediaIcon({ icon }: { icon: any }) {
  return <div className="cursor-pointer text-2xl text-white">{icon}</div>;
}
