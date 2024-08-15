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
            className={getMenuClasses("Masuk")+"text-[16px]"}
            onClick={() => handleMenuClick("Masuk")}
          >
            Beranda
          </Link>
        </NavbarItem>
        <NavbarItem>
          <p className="font-bold font-inter sm:text-[14px] text-pdarkblue">
            Hai, Udang!
          </p>
        </NavbarItem>
        <NavbarItem className="hidden xs:flex">
        <div className="dropdown bg-none hover:bg-none">
          <div tabIndex={0} role="button" className="bg-none">
          <img
            src={LogoImage}
            alt="User Logo"
            className="rounded-full cursor-pointer"
            style={{ width: '35px', height: '35px' }}
            onClick={handleLogoClick}
          />
          </div>
          <ul tabIndex={4} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-21 p-1 shadow" href="/ayomagang" >
            <li className="text-pdarkblue font-assistant font-semibold"><a>Keluar</a></li>
          </ul>
        </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu isOpen={isMenuOpen} className="lg:hidden">
        <NavbarMenuItem>
          <Link
            href="/berandamasuk"
            className={getMenuClasses("Masuk") + "text-[18px]"}
            onClick={() => handleMenuClick("Masuk")}
          >
            Beranda
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <p className="font-bold font-inter text-[14px] text-pdarkblue mb-3">
            Hai, Udang!
          </p>
          <img
            src={LogoImage}
            alt="User Logo"
            className="ml-2 rounded-full cursor-pointer"
            style={{ width: '24px', height: '24px' }}
            onClick={handleLogoClick}
          />
          {isDropdownOpen && (
            <button
              className="bg-base text-white py-1 px-3 dropdown-content rounded-full mt-2 ml-5"
            >
            <Link to="/ayomagang" class="text-inherit no-underline text-pdarkblue font-inter sm:text-base text-sm">
              Keluar
            </Link>
            </button>
          )}
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
