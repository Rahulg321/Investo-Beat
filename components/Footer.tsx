import Image from "next/image";
import React from "react";
import logo from "@/public/food-blogger-site-logo.svg";
import { nav } from "@/lib/nav";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="block-space bg-gray-200">
      <div className="big-container">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <Image src={logo} alt="Company Logo" width={50} height={50} />
          </div>
          <div className="flex gap-4">
            {nav.map((e, index) => {
              return (
                <Link href={e.navlink} key={index}>
                  {e.navlabel}
                </Link>
              );
            })}
          </div>
          <div className="flex gap-4">
            <SocialMediaIcon icon={<FaSquareXTwitter />} />
            <SocialMediaIcon icon={<FaInstagram />} />
            <SocialMediaIcon icon={<FaLinkedin />} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <span className="text-sm font-semibold">
            © 2024 Food Blogger & Influencer
          </span>
          <span className="text-sm font-semibold">
            Powered by Food Blogger & Influencer
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function SocialMediaIcon({ icon }: { icon: any }) {
  return <div className="cursor-pointer text-2xl text-mainO">{icon}</div>;
}
