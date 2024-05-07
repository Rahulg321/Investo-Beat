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
    <footer className="block-space big-container">
      <div className="flex justify-between items-center mb-8">
        <div>
          <Image src={logo} alt="Company Logo" width={50} height={50} />
        </div>
        <div className="flex gap-4">
          {nav.map((e, index) => {
            return <Link href={e.navlink}>{e.navlabel}</Link>;
          })}
        </div>
        <div className="flex gap-4">
          <SocialMediaIcon icon={<FaSquareXTwitter />} />
          <SocialMediaIcon icon={<FaInstagram />} />
          <SocialMediaIcon icon={<FaLinkedin />} />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span>© 2024 Food Blogger & Influencer</span>
        <span>Powered by Food Blogger & Influencer</span>
      </div>
    </footer>
  );
};

export default Footer;

function SocialMediaIcon({ icon }: { icon: any }) {
  return <div className="text-2xl text-mainO">{icon}</div>;
}
