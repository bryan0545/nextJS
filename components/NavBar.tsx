import React from "react";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const NavBar = () => {
  return (
    <nav>
      {menuItems.map(({ text, href }) => (
        <ActiveLink key={href} href={href} name={text} />
      ))}
    </nav>
  );
};
