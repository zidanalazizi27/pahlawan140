import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { ChevronDown } from "./Icon.jsx";

export default function NavbarCustom() {
  const [activeMenu, setActiveMenu] = useState("Beranda");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const getMenuClasses = (menu) => {
    return activeMenu === menu
      ? "font-bold font-inter text-[14px] text-white bg-pdarkblue py-2 px-4 rounded-full transition-colors duration-100"
      : "font-bold font-inter text-[14px] text-pdarkblue transition-colors duration-100";
  };

  return (
    <Navbar className="absolute bg-base">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <NavbarBrand>
        <a href="https://pahlawan140.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://www.bps.go.id/_next/image?url=%2Fassets%2Flogo-bps.png&w=1080&q=75"
            alt="BPS Logo"
            width={48}
            height={48}
          />
          </a>
          <p className="font-[800] font-inter italic text-[14px] sm:text-[18px] text-pdarkblue ml-3 block xs:inline-block">
            <Link href="/ayomagang" style={{ color: 'inherit', textDecoration: 'none' }}>
              AYO MAGANG <br className="xs:hidden" />
            </Link>
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="end">
        <NavbarItem className="hidden xs:flex">
          <Link
            href="/masukam"
            className={getMenuClasses("Masuk")}
            onClick={() => handleMenuClick("Masuk")}
          >
            Masuk
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link
            href="/daftaram"
            className={getMenuClasses("Daftar")}
            onClick={() => handleMenuClick("Daftar")}
          >
            Daftar Akun
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu isOpen={isMenuOpen} className="lg:hidden">
        <NavbarMenuItem>
          <Link
            href="/masukam"
            className={getMenuClasses("Masuk")}
            onClick={() => handleMenuClick("Masuk")}
          >
            Masuk
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/daftaram"
            className={getMenuClasses("Daftar")}
            onClick={() => handleMenuClick("Daftar")}
          >
            Daftar Akun
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}