"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";

export const Footer = () => {
  const pathname = usePathname();

  return (
    <NextUINavbar className="border-t-4" maxWidth="xl" position="sticky">
      {/*Desktop Menu*/}
      <NavbarContent
        className="basis-1/5 sm:basis-full border-top"
        justify="start"
      >
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="text-inherit">© 2024 varunshridhar.com</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/*Icons on the right*/}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            aria-label="LinkedIn"
            href={siteConfig.links.linkedIn}
          >
            <CiLinkedin className="text-default-500" size={20} />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <FaGithub className="text-default-500" size={20} />
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/*Mobile Menu*/}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <FaGithub className="text-default-500" size={20} />
        </Link>
        <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedIn}>
          <CiLinkedin className="text-default-500" size={20} />
        </Link>
      </NavbarContent>
    </NextUINavbar>
  );
};
