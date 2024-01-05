"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  ChevronRight,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";
import FooterWidget from "./FooterWidget";

const links = {
  social: [
    { title: "Facebook", url: "#", icon: <Facebook /> },
    { title: "Instagram", url: "#", icon: <Instagram /> },
    { title: "Twitter", url: "#", icon: <Twitter /> },
    { title: "Linkedin", url: "#", icon: <Linkedin /> },
    // ... other social links
  ],
  quick: [
    {
      title: "About",
      link: "#about-us",
    },
    {
      title: "Courses",
      link: "#courses",
    },
    {
      title: "Contact Us",
      link: "#contact-us",
    },
    {
      title: "Support Us",
      link: "#support-us",
    },
    {
      title: "Tawhid Academy Policies",
      link: "#privacy-policy",
    },
    {
      title: "FAQ's",
      link: "#faq",
    },
  ],
  contact: [
    { text: "1 Osborne Road, Dagenham RM9 5BB", icon: <MapPin /> },
    { text: "tawhidacademy.info@gmail.com", icon: <Mail /> },
    { text: "020 3149 9484", icon: <Phone /> },
  ],
};

const FooterTop = () => {
  return (
    <div className="bg-gray-800 py-12  ">
      <div className="container mx-auto px-4">
        <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FooterWidget className="md:col-span-2 lg:col-span-1">
            <Image
              src="/logo-white.png"
              alt="Tawhid Academy"
              width={150}
              height={80}
            />
            <p className="text-white">
              We know that it’s the people and their ideas that make the
              workplace. That’s why we provide them with workspaces that improve
              their capacity to achieve their goals...
            </p>
            <p>
              <Link
                href="#about-us"
                className="text-orange-400 hover:underline"
              >
                Read More
              </Link>
            </p>
            <div className="flex space-x-2">
              {links.social.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  title={link.title}
                  className="text-white hover:text-blue-400"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </FooterWidget>

          <FooterWidget title="Quick Links">
            <ul className="space-y-2">
              {links.quick.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.link}
                    className="text-gray-300 hover:underline flex items-center"
                  >
                    <ChevronRight className="text-gray-300 mr-2" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterWidget>

          <FooterWidget title="Contact Info">
            {links.contact.map((info, index) => (
              <p key={index} className="flex items-center text-gray-300">
                {info.icon}
                <span className="ml-2">{info.text}</span>
              </p>
            ))}
            <form className="mt-4">
              <div className="flex gap-2">
                <Input type="email" placeholder="Email" className="flex-1" />
                <Button>
                  <ArrowRight />
                </Button>
              </div>
            </form>
          </FooterWidget>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
