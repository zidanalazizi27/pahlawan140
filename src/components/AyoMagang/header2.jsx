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
import LogoImage from '/image/logo_am.png'; // Import your logo image

export default function NavbarCustom() {
  const [activeMenu, setActiveMenu] = useState("Beranda");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  const handleLogoClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
            <Link href="/berandamasuk" style={{ color: 'inherit', textDecoration: 'none' }}>
              AYO MAGANG <br className="xs:hidden" />
            </Link>
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="end">
        <NavbarItem className="hidden xs:flex">
          <Link
            href="/berandamasuk"
            className={getMenuClasses("Masuk")}
            onClick={() => handleMenuClick("Masuk")}
          >
            Beranda
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link
            href="/berandamasuk"
            className={getMenuClasses("Daftar")}
            onClick={() => handleMenuClick("Daftar")}
          >
            Hai, Udang!
          </Link>
          <img
            src={LogoImage}
            alt="User Logo"
            className="ml-2 rounded-full cursor-pointer"
            style={{ width: '24px', height: '24px' }}
            onClick={handleLogoClick}
          />
          {isDropdownOpen && (
            <button
              className="bg-pdarkblue text-white font-inter text-sm py-1 px-3 rounded-full ml-2"
              onClick={() => window.location.href = '/ayomagang'}
            >
              Keluar
            </button>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu isOpen={isMenuOpen} className="lg:hidden">
        <NavbarMenuItem>
          <Link
            href="/berandamasuk"
            className={getMenuClasses("Masuk")}
            onClick={() => handleMenuClick("Masuk")}
          >
            Beranda
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/berandamasuk"
            className={getMenuClasses("Daftar")}
            onClick={() => handleMenuClick("Daftar")}
          >
            Hi, Udang!
          </Link>
          <img
            src={LogoImage}
            alt="User Logo"
            className="ml-2 rounded-full cursor-pointer"
            style={{ width: '24px', height: '24px' }}
            onClick={handleLogoClick}
          />
          {isDropdownOpen && (
            <button
              className="bg-pdarkblue text-white py-1 px-3 rounded-full ml-2"
              onClick={() => window.location.href = '/ayomagang'}
            >
              Keluar
            </button>
          )}
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
